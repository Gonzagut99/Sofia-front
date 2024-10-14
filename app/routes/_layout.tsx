import { Outlet } from "@remix-run/react"

function _layout() {
  return (
    <main className="min-h-dvh">
        <Outlet></Outlet>
    </main>
  )
}

export default _layout