import { FC } from "react";
import { Link } from "react-router-dom";

// MARKUP
const LinksAuth: FC = () => {
  return (
    <div className="font-bold leading-loose tracking-wider uppercase">
      <Link
        to="/auth/register"
        className="px-2 py-2 mr-2 xs:mr-4 text-sm border border-amber-500 rounded-md sm:text-base hover:bg-amber-600 hover:text-slate-900"
      >
        register
      </Link>
      <Link
        to="/auth/login"
        className="px-2 py-2 text-sm border border-amber-500 rounded-md sm:text-base hover:bg-amber-600 hover:text-slate-900"
      >
        login
      </Link>
    </div>
  );
};
export default LinksAuth;
