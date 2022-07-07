import { FC, useContext } from "react";
import { Link } from "react-router-dom";
// auth api with axios
import AuthAPI from "../../../api/authApi";
// toastify
import { toast } from "react-toastify";
//context
import { AuthContext } from "../../../context/auth/authContext";
// chakra components and icons
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

// MARKUP
const Dropdown: FC = () => {
  // global state
  const { state, dispatch } = useContext(AuthContext);
  // handeling user logging out
  const logout = async () => {
    try {
      const response = await AuthAPI.getFromServer(`/auth/logout`);
      dispatch({ type: "LOGOUT_USER" });
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <Menu>
      <MenuButton
        mr={4}
        as={Button}
        rightIcon={<FaArrowDown className="text-slate-900" />}
      >
        <FaUserAlt className="md:hidden text-slate-900" />
        <span className="hidden md:block text-slate-900">
          {state.user.name ? state.user.name : "username"}
        </span>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link
            to="/"
            className="flex items-center justify-between w-full text-slate-900"
          >
            <span>Account Settings</span> <FaCog className="text-slate-900" />
          </Link>
        </MenuItem>
        <MenuItem
          className="flex items-center justify-between w-full"
          onClick={logout}
        >
          <span className="text-slate-900">Logout</span>
          <FaUserSlash className="text-slate-900" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default Dropdown;
