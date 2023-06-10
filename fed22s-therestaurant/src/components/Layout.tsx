import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import GlobalFonts from "../fonts/fonts";

const Layout = () => {
  return (
    <>
      <main>
        <GlobalFonts />
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </main>
    </>
  );
};

export default Layout;
