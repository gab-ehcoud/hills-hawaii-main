import { useEffect, useState } from "react";
import HeaderSerch from "../components/HeaderSerch";
import Destinations from "../components/Destinations";
import Activities from "../components/Activities";
import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";

import { Link, useNavigate } from "react-router-dom";

export default function Header1() {
  const navigate = useNavigate();

  const pageNavigate = (pageName) => {
    navigate(pageName);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [addClass, setAddClass] = useState(false);

  // Add a class to the element when scrolled 50px
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header -type-1 js-header ${addClass ? "-is-sticky" : ""}`}
      >
        <div className="header__container container">
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className="icon-main-menu"></i>
            </button>
          </div>

          <div className="header__logo">
            <Link to="/" className="header__logo">
              <img src="/img/general/logo-1.svg" alt="logo icon" />
            </Link>

            <div className="xl:d-none ml-30">
              <HeaderSerch />
            </div>
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-18"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-18"></i>
            </button>
          </div>

          <div className="header__right">
            <Destinations />
            <Activities />
            <Currency />
            <Link to="/register" className="ml-10">
              Sign up
            </Link>

            <Link
              to="/login"
              className="button -sm -dark-1 bg-dark-1 rounded-200 text-white ml-30"
            >
              Log in
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn ml-30 js-menu-button"
            >
              <i className="icon-main-menu"></i>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
