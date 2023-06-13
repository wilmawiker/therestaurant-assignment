import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import GlobalStyle from "./styled/Global";
import GlobalFonts from "../fonts/fonts";
import { GeneralWrapper } from "./styled/Wrappers";
import { BackgroundImage } from "./styled/BackgroundImage";

const Layout = () => {
  return (
    <>
      <main>
        <GlobalStyle />
        <GlobalFonts />
        <BackgroundImage>
          <Header></Header>
          <GeneralWrapper flexdirection="column">
            <Outlet></Outlet>
          </GeneralWrapper>
          <Footer></Footer>
        </BackgroundImage>
      </main>
    </>
  );
};

export default Layout;
