import { sidebarItems } from "@/data/dashboard";
import { Link, useLocation } from "react-router-dom";
import { MountainSnow, TreePalm, LogOut } from "lucide-react";

import React from "react";

export default function Sidebar({ setSideBarOpen }) {
  const { pathname } = useLocation();
  return (
    <div className="dashboard__sidebar js-dashboard-sidebar">
      <div className="dashboard__sidebar_header">
        <span
          onClick={() => setSideBarOpen(false)}
          className="text-white closeSidebar"
        >
          &times;
        </span>

        {/* <MountainSnow size={32} className="mr-5" /> */}
        <img
          src="/img/general/logo-light.svg"
          alt="logo icon"
          width={160}
          // height={50}
          
        />
      </div>

      <div className="sidebar -dashboard">
        {sidebarItems.map((elm, i) => (
          <div
            key={i}
            className={`sidebar__item ${
              pathname == elm.href ? "-is-active" : ""
            } `}
          >
            <Link to={elm.href}>
              <i className={elm.iconClass}></i>
              <span className="ml-10">{elm.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
