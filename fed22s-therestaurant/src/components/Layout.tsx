import { Outlet } from "react-router"

const Layout = () => {
    return <>
    <main>
        <Outlet></Outlet>
    </main>
    </>
}

export default Layout;