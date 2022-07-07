import { FC } from "react";
import { Link } from "react-router-dom";
// components
import SocialLinks from "./SocialLinks";

// MARKUP
const Footer: FC = () => {
  return (
    <footer className="w-full text-center md:text-left py-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="w-11/12 max-w-screen-2xl mx-auto">
        <div className="relative mx-auto md:ml-0 w-36 mb-12">
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" className="mx-auto" />
          </Link>
          <span className="absolute w-20 h-1 -top-12 left-8 bg-amber-600 md:left-0"></span>
        </div>

        <div className="flex flex-col gap-y-12 md:flex-row lg:items-center">
          <p className="text-sm leading-relaxed opacity-50 md:w-1/2 lg:w-1/3">
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Visit our demo
            facility - we are open 7 days a week.
          </p>
          <div className="grid gap-y-12 lg:grid-cols-2 md:w-1/2 lg:w-2/3 md:text-right">
            <div className="font-semibold flex flex-col gap-y-3">
              <p>68 Asfordby Rd, Alcaston</p>
              <p>SY6 1YA, United Kingdom</p>
              <p>+ 44 1241 918425</p>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
