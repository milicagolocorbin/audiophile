import { FC, useRef } from "react";
import { Link } from "react-router-dom";
// chakra components and icons
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
// info for sidebar
import { categories } from "../../../constants/categories";

const Sidebar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <>
      <button
        ref={btnRef}
        onClick={onOpen}
        className="order-first block text-xl text-amber-500 sm:hidden"
      >
        <FaBars className="hover:text-amber-600 hover:scale-110" />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <div className="h-full py-12 text-white bg-gradient-to-br from-slate-700 to-slate-900">
            <DrawerCloseButton className="hover:text-amber-500 hover:scale-110" />
            <DrawerBody>
              <nav className="flex flex-col items-start justify-between font-bold leading-loose tracking-wider uppercase lg:grow gap-y-8">
                <Link
                  to="/"
                  className="hover:text-amber-600 hover:scale-105"
                  onClick={onClose}
                >
                  home
                </Link>
                {categories.map((category) => {
                  return (
                    <Link
                      key={category.id}
                      to={category.href}
                      onClick={onClose}
                      className="hover:text-amber-600 hover:scale-105"
                    >
                      {category.name}
                    </Link>
                  );
                })}
              </nav>
            </DrawerBody>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
