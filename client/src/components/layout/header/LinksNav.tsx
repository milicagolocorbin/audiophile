import { FC } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../constants/categories";

// MARKUP
const LinksNav: FC = () => {
  return (
    <nav className="flex justify-between font-bold leading-loose tracking-wider uppercase lg:grow gap-x-6 md:gap-x-8">
      <Link to="/" className="hover:text-amber-600 hover:scale-105">
        home
      </Link>
      {categories.map((category) => {
        return (
          <Link
            key={category.id}
            to={category.href}
            className="hover:text-amber-600 hover:scale-105"
          >
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
};
export default LinksNav;
