import { AppBar } from "../AppBar/AppBar";
import { Main } from "../Main/Main";
import { Footer } from "../../components/Footer/Footer";

export const Layout = () => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <Main />
      <Footer />
    </>
  );
};
