import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import GlobalFonts from "../fonts/fonts";
import { GeneralWrapper } from "./styled/Wrappers";

const Layout = () => {
  return (
    <>
      <main>
        <GlobalFonts />
        <Header></Header>
        <GeneralWrapper flexdirection="column">
          <Outlet></Outlet>
        </GeneralWrapper>
        <Footer></Footer>
      </main>
    </>
  );
};

export default Layout;
