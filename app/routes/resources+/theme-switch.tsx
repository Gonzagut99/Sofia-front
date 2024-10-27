import { useForm, getFormProps } from '@conform-to/react'
import { json, redirect, useFetcher, useFetchers } from '@remix-run/react'
import { setTheme, type Theme } from '../../utils/theme.server'
import { ThemeButton } from '~/components/ui/custom/ThemeButton';
import { z } from 'zod'
import { ActionFunctionArgs } from '@remix-run/node';
import { parseWithZod } from '@conform-to/zod';
import { invariantResponse } from '@epic-web/invariant';
import { useHints } from '~/utils/client-hints';
import { useRequestInfo } from '~/utils/request-info';

const ThemeFormSchema = z.object({
  theme: z.enum(["system", "light", "dark"]),
  // this is useful for progressive enhancement
  redirectTo: z.string().optional(),
});

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const submission = parseWithZod(formData, { schema: ThemeFormSchema });
  
    invariantResponse(submission.status === 'success', 'Invalid theme received');
  
    const { theme, redirectTo } = submission.value;
  
    const responseInit = {
      headers: { 'set-cookie': setTheme(theme) },
    };
    if (redirectTo) {
      return redirect(redirectTo, responseInit)
    } else {
      return json({ result: submission.reply() }, responseInit)
    }  
  }

export function ThemeSwitch({
    userPreference,
  }: {
    userPreference?: Theme | null;
  }) {
  const fetcher = useFetcher<typeof action>();
  
  const [form] = useForm({
      id: 'theme-switch',
      lastResult: fetcher.data?.result,
    });
  
  const optimisticMode = useOptimisticThemeMode()
  const mode = optimisticMode ?? userPreference ?? 'system'
  const nextMode =
      mode === 'system' ? 'light' : mode === 'light' ? 'dark' : 'system';

  
    return (
      <fetcher.Form
        method="POST"
        {...getFormProps(form)}
        action="/resources/theme-switch"
      >
        <input type="hidden" name="theme" value={nextMode} />
        <div>
          <ThemeButton variant={mode}></ThemeButton>
        </div>
      </fetcher.Form>
    );
  }

/**
 * If the user's changing their theme mode preference, this will return the
 * value it's being changed to.
 */
export function useOptimisticThemeMode() {
  const fetchers = useFetchers();
  const themeFetcher = fetchers.find(
    (f) => f.formAction === '/resources/theme-switch'
  );

  if (themeFetcher && themeFetcher.formData) {
    const submission = parseWithZod(themeFetcher.formData, {
      schema: ThemeFormSchema,
    });

    if (submission.status === 'success') {
      return submission.value.theme;
    }
  }
}

/**
 * @returns the user's theme preference, or the client hint theme if the user
 * has not set a preference.
 */
export function useTheme() {
    const hints = useHints();
    const requestInfo = useRequestInfo();
    const optimisticMode = useOptimisticThemeMode();
    if (optimisticMode) {
      return optimisticMode === 'system' ? hints.theme : optimisticMode;
    }
    return requestInfo.userPrefs.theme ?? hints.theme;
  }