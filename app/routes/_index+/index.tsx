import { Outlet } from "@remix-run/react"
//import { ThemeSwitch } from "../resources+/theme-switch"

function index() {
  return (
    <>
        <Outlet></Outlet>
        {/* <ThemeSwitch></ThemeSwitch> */}
    </>
  )
}

export default index