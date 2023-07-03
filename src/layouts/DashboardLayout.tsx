import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  createContext,
} from "react";
import { Outlet, useLocation } from "react-router";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "../style/NavBar.css";
import "../style/DashboardLayout.css";
import { DashboardContext } from "../contexts/DashboardContext";
export const ArrayContext = createContext<any[]>([]);

const DashboardLayout = () => {
  const location = useLocation();
  const { loading } = useContext(DashboardContext);
  const [userComms, setUserComms] = useState<any[]>([]);
  // const [commsState, setCommsState] = useState<boolean>(false);
  // let commsState: unknown;
  // let stateFromStorage = localStorage.getItem("state");
  // if (stateFromStorage) {
  //   commsState = JSON.parse(stateFromStorage);
  //   console.log(commsState);

  // }

  useEffect(() => {
    const commsFromStorage = localStorage.getItem("userCommunities");
    if (commsFromStorage) {
      setUserComms(JSON.parse(commsFromStorage));
    }
  }, []);
console.log(userComms);

  return (
    <div className="dash-layout">
      {loading === false && (
        <Fragment>
          <NavBar />
          <section className="dashboard_layout">
            <main className="dashboard_layout-sidebar">
              <ArrayContext.Provider value={userComms}>
                <SideBar />
              </ArrayContext.Provider>

              {/* <SideBar communities={userComms} /> */}
            </main>
            <main className="dashboard_layout-content">
              <Outlet />
            </main>
          </section>
        </Fragment>
      )}
    </div>
  );
};

export default DashboardLayout;
