
import { Outlet } from "react-router"
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout = () => {
    return <>
    <main>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </main>
    </>
  );
};

export default Layout;
