import type { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, redirect } from "@remix-run/react";
import { PageContainer } from "~/components/ui/custom/PageContainer";
import { BackNavigator } from "~/routes/resources+/back-navigator";
import { isProUser } from "~/utils/auth.server";


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const {
    isPro,
    user,
  } = await isProUser(request);

  if ( !user ){
    return redirect(
      "/login"
    )
  }

  if ( user && !isPro) {
    return redirect(
      "/subscriptions/subscription_plans"
    )
  }

  return null
};


function _layout() {
  return (
    <PageContainer className="flex flex-col gap-10">
      <BackNavigator></BackNavigator>
      <Outlet></Outlet>
    </PageContainer>
  );
}

export default _layout;
