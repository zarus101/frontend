import Footer from "../commons/Footer";
import { Navbar } from "../commons/Header";

export const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer/>
    </>
  );
};
