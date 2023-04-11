import { AppBar } from "../AppBar/AppBar";
import { Main } from "../Main/Main";
import { Footer } from "../../components/Footer/Footer";
// import { ReactComponent as Logo } from '../../logo.jpg'

export const Layout = () => {
  return (
    <>
      <header>
{/* <Logo/> */}
{/* <img src={logo} alt="logo"/> */}
        <AppBar>

</AppBar>
      </header>
      <Main />
      <Footer />
    </>
  );
};
