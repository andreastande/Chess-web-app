import { Outlet } from "react-router"
import Header from "./Header"

const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-[#1C1C1D]">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
