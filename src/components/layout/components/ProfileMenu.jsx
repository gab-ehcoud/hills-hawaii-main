import { useEffect, useState, useContext, useRef } from "react";
import { Settings, Sun, HelpCircle, LogOut, Cylinder } from "lucide-react"; // Importing icons
import { Store } from "../../../store/index";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu({ data }) {
  const [currentdd, setCurrentdd] = useState(""); // State for dropdown visibility
  const dropDownContainer = useRef();
  const { dispatch: ctxDispatch } = useContext(Store);
  const navigate = useNavigate();

  // Click outside logic to close the dropdown
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentdd("");
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  console.log(data, "data");

  const logoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div
      ref={dropDownContainer}
      className="headerDropdown lg:d-none js-form-dd"
    >
      <div
        className="headerDropdown__profileButton"
        onClick={() =>
          setCurrentdd((prev) => (prev === "profile" ? "" : "profile"))
        }
      >
        Hey, &nbsp;
        <span
          className="
        fw-600
        cursor-pointer
        "
        >
          {data?.name?.split(" ")[0]}
        </span>{" "}
        <i className="icon-chevron-down text-18"></i>
      </div>

      <div
        className={`headerDropdown__content ${
          currentdd === "profile" ? "is-active" : ""
        }`}
      >
        <ul className="dropdown-menu-list">
          {data?.role === "vendor" && (
            <li className="dropdown-menu-item">
              <Cylinder className="icon" size={16} />
              <span onClick={() => navigate("/db-main")}>Dashboard</span>
            </li>
          )}
          <li className="dropdown-menu-item">
            <Settings className="icon" size={16} />
            <span onClick={() => navigate("/profile")}>Settings</span>
          </li>
          <li className="dropdown-menu-item">
            <Sun className="icon" size={16} />
            <span>Appearance</span>
          </li>
          <div className="dropdown-divider"></div>
          <li className="dropdown-menu-item">
            <HelpCircle className="icon" size={16} />
            <span>Support</span>
          </li>
          {/* <li className="dropdown-menu-item">
            <Download className="icon" size={16} />
            <span>Download the app</span>
          </li> */}
          <li className="dropdown-menu-item">
            <LogOut className="icon" size={16} />
            <span onClick={logoutHandler}>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
