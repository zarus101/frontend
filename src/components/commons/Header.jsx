import LogoImg from "../assests/images/vedu-logo.png";
import { ButtonMain, ButtonRound } from "../ui/Buttons";
import { navbarLinks } from "../assests/dummyData";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectName } from "../../redux/reducer/auth/authSlice";
import { ShowOnLogin, ShowOnLogout } from "../../routers/HiddenLink";
export const Head = () => {
  return (
    <>
      <div className="bg-secondary text-white mobile:hidden">
        <div className="containers flex justify-between items-center py-2">
          <div className="left flex justify-between items-center">
            <p>Vedu Education</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const name = useSelector(selectName);
  return (
    <>
      <header className=" p-5 shadows z-[2000] bg-white top-0 right-0 left-0 ">
        <div className="flex justify-between items-center">
          <div className="logo ml-[100px]">
            <img src={LogoImg} alt="img" className="w-[100px]" />
          </div>
          <nav className="">
            <ul className="flex justify-between items-center">
              {navbarLinks.map((links, i) => (
                <li className="hover-text text-black text-[23px] cursor-pointer capitalize font-bold  mr-8" key={i}>
                  <NavLink activeClassName="active" className="transition" to={links.path}>
                    {links.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="right flex items-center md:hidden mobile:hidden">
            <ShowOnLogout>
              <ButtonMain handleClick={handleClick} text={"login"} />
            </ShowOnLogout>
            <ShowOnLogin>
              <NavLink to="/admin/dashboard" className="">
                <ButtonMain text={name} />
              </NavLink>
            </ShowOnLogin>
          </div>
        </div>
      </header>
    </>
  );
};
