import { Outlet } from "@remix-run/react"

function _layout() {
  return (
    <main className="min-h-dvh dark:bg-zinc-900">
        <Outlet></Outlet>
    </main>
  )
}

export default _layout