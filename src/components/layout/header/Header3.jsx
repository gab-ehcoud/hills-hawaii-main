import React, { useEffect, useState, useContext } from "react";
import Menu from "../components/Menu";
import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";
import { MountainSnow, TreePalm, LogOut } from "lucide-react";
import HeaderSerch from "../components/HeaderSerch";
import { Link, Route, useNavigate } from "react-router-dom";
import Destinations from "../components/Destinations";
import { Store } from "../../../store/index";
import ProfileMenu from "../components/ProfileMenu";

export default function Header3({ theme, setTheme }) {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  // console.log(i)

  const [mood, setMood] = useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);

  const pageNavigate = (pageName) => {
    navigate(pageName);
  };

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  const switchMood = (mood) => {
    setMood(mood);
    setTheme(mood);
    document.body.className = mood === "light" ? "" : "dark";
  };

  const logoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header -type-3 js-header ${addClass ? "-is-sticky" : ""}`}
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
            <div className="mb-1 mr-10">
              <button
                onClick={() => switchMood(mood === "light" ? "dark" : "light")}
                className="button text-dark-1"
              >
                {mood === "light" ? (
                  <MountainSnow size={32} />
                ) : (
                  <TreePalm size={32} />
                )}
              </button>
            </div>
            <Link to="/" className="header__logo">
              <img
                src="/img/general/logo.svg"
                alt="logo icon"
                width={200}
                height={30}
              />
            </Link>
            {Route.path === "/" ? null : (
              <div className="ml-30">
                <HeaderSerch />
              </div>
            )}
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-18"></i>
            </button>

            {userInfo ? (
              <>
                <button
                  onClick={() => pageNavigate("/profile")}
                  className="d-flex ml-20"
                >
                  <i className="icon-person text-18"></i>
                </button>
                <button onClick={logoutHandler} className="d-flex ml-20">
                  <i className="icon-logout text-18"></i>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => pageNavigate("/login")}
                  className="d-flex ml-20"
                >
                  <i className="icon-person text-18"></i>
                </button>
              </>
            )}
          </div>

          <div className="header__right">
            <Destinations />

            <Link to="/help-center" className="ml-20">
              Surprise Me!
            </Link>

            {userInfo ? (
              <>
                <Link to="/wishlists" className="ml-20">
                  Wishlists
                </Link>
                <div className="ml-20">
                  <ProfileMenu data={userInfo} />
                </div>
              </>
            ) : (
              <>
                <Link to="/register" className="ml-30">
                  Sign up
                </Link>
                <Link
                  to="/login"
                  className="button -sm -outline-dark-1 rounded-200 text-dark-1 ml-30"
                >
                  Log in
                </Link>
              </>
            )}
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
