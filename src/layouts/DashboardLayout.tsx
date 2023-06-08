import React from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "../style/NavBar.css";
import "../style/DashboardLayout.css"

const DashboardLayout = () => {
  return (
    <div className="dash-layout">
      <NavBar />
      <section className="dashboard_layout">
        <main className="dashboard_layout-sidebar">
          <SideBar />
        </main>
        <main className="dashboard_layout-content">
          <Outlet />
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;
