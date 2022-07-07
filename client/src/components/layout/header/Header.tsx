import { FC, useContext } from "react";
import { Link } from "react-router-dom";
//context, components and icons
import { AuthContext } from "../../../context/auth/authContext";
import LinksNav from "./LinksNav";
import LinksAuth from "./LinksAuth";
import Dropdown from "./Dropdown";
import Sidebar from "../sidebar/Sidebar";
import { FaShoppingCart } from "react-icons/fa";

// MARKUP
const Header: FC = () => {
  // local state
  const { state } = useContext(AuthContext);

  return (
    <header className="w-full shadow-md text-white bg-slate-900">
      <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between py-4 xs:py-7 gap-y-4 xs:gap-y-0 w-11/12 max-w-screen-2xl mx-auto">
        <img
          className="block"
          src="/images/logo.svg"
          alt="logo"
          width={145}
          height={25}
        />
        {state.auth ? <Dropdown /> : <LinksAuth />}
      </div>
      <div className="flex items-center justify-between w-11/12 h-full pb-4 xs:pb-7 mx-auto max-w-screen-2xl">
        <div className="hidden sm:block">
          <LinksNav />
        </div>
        <Sidebar />
        <div className="flex items-center justify-end xl:grow">
          <span className="h-8 mr-4 border-l-2 border-amber-500"></span>
          <Link to="/cart/">
            <FaShoppingCart className="w-5 h-5 hover:text-amber-600 hover:scale-110" />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
