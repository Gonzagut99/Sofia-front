import { Outlet } from "@remix-run/react"
import { PageContainer } from "~/components/ui/custom/PageContainer"
//import { ThemeSwitch } from "../resources+/theme-switch"

function index() {
  return (
    <PageContainer>
        {/* <img className="static inset-0 w-full" src={HomeBgLight} alt="Background" /> */}
        <Outlet></Outlet>
        
    </PageContainer>
  )
}

export default index