import { json, redirect, useFetcher} from "@remix-run/react";
import { Button, ButtonProps } from "~/components/ui/button";
// import { BackendError } from "~/services/error-handling";
import { loginGoogle } from "~/services/loginService.server";


export const action = async () => {
  try {
    const redirectionUri = await loginGoogle();
    return redirect(redirectionUri);
    // if (!responseData) {
    //   return json({ error: "Error processing login data" }, { status: 500 });
    // }
    // if (responseData instanceof BackendError) {
    //   return json({ error: responseData.statusText }, { status: responseData.status });
    // }

    // const cookieHeaders = responseData?.cookieHeaders;
    // return redirect("/", { headers: cookieHeaders });
  } catch (error) {
    console.error("Error processing login data", error);
    return json({ error: "Error processing login data" }, { status: 500 });
  }
};

interface GoogleAuthButtonProps extends ButtonProps {
}

function GoogleAuthButton(props: GoogleAuthButtonProps) {
    //const navigate = useNavigate();
    const fetcher = useFetcher();
    const handleSubmit = () => {
      fetcher.submit(null, {
        method: "post",
        action: "/resources/google-auth",
      });
    }
  return (
    //make a google auth button
    <Button {...props} variant={"outline"} className="text-base text-zinc-700 dark:text-zinc-300 flex gap-2" onClick={handleSubmit}>Autenticar con <span><img className="size-5" src="/icons/googleIcon.png" alt="Google Icon" /></span></Button>
  )
}

export default GoogleAuthButton