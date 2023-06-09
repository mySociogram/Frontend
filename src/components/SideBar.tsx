import React, { useContext, useEffect, useState } from "react";
import "../style/SideBar.css";
import { AiOutlineHome } from "react-icons/ai";
import {
  BiWallet,
  BiMessageRoundedDetail,
  BiMicrophone,
  BiMoviePlay,
} from "react-icons/bi";
import { BsFillPeopleFill, BsGraphUp, BsCalendar4Event } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { ImFilm } from "react-icons/im";
import { FiMusic } from "react-icons/fi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { MdMoreHoriz } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import activity from "../assets/activity.png";
import { ConnectWalletContext } from "../contexts/ConnectWalletContext";
import { ArrayContext } from "../layouts/DashboardLayout";

const SideBar = () => {
  const array = useContext(ArrayContext);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [communities, setCommunities] = useState<any[]>([]);
  const location = useLocation();

  useEffect(() => {
    const commsFromStorage = localStorage.getItem("userCommunities");
    if (commsFromStorage) {
      setCommunities(JSON.parse(commsFromStorage));
    }
  }, [isOpen]);
  console.log(communities);
  console.log(array);

  return (
    <aside className="sidebar p-lg-5">
      <section>
        <div className="d-flex">
          <AiOutlineHome
            className="side-icons"
            style={{
              color:
                location.pathname === "/dashboard/home" ? "#6821C3" : "black",
            }}
          />
          <Link
            to="/dashboard/home"
            className="Link-sideText ms-lg-2"
            style={{
              color:
                location.pathname === "/dashboard/home" ? "#6821C3" : "black",
            }}
          >
            <p>Home</p>
          </Link>
        </div>
        <div className="d-flex mt-lg-2">
          <BsFillPeopleFill
            className="side-icons"
            style={{
              color:
                location.pathname === "/dashboard/community"
                  ? "#6821C3"
                  : "black",
            }}
          />
          <Link
            to="/dashboard/community"
            className="Link-sideText ms-lg-2"
            style={{
              color:
                location.pathname === "/dashboard/community"
                  ? "#6821C3"
                  : "black",
            }}
          >
            <p>Community</p>
          </Link>
          <div className="ms-lg-2 arrowdropup">
            {isOpen === false ? (
              <RiArrowDropUpLine
                className="side-arrowIcon"
                onClick={() => setIsOpen(true)}
              />
            ) : (
              <RiArrowDropDownLine
                className="side-arrowIcon"
                onClick={() => setIsOpen(!true)}
              />
            )}
          </div>
        </div>
        <section className="mt-lg-2 activity_grp-content">
          {isOpen &&
            communities.map((community, index) => (
              <div key={index}>{community.communityName}</div>
            ))}
          {/* {isOpen ? (
            <section>
              <div className="d-flex">
                <Link
                  to=""
                  className="Link-sideText ms-lg-2"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                >
                  <p>Clown</p>
                </Link>
              </div>
              <div className="d-flex mt-lg-2">
                <Link
                  to=""
                  className="Link-sideText ms-lg-2"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                >
                  <p>Design</p>
                </Link>
              </div>
              <div className="d-flex mt-lg-2">
                <Link
                  to="/dashboard/devCommunity"
                  className="Link-sideText ms-lg-2"
                  style={{
                    color:
                      location.pathname === "/dashboard/devCommunity"
                        ? "#6821C3"
                        : "black",
                  }}
                >
                  <p>Developer</p>
                </Link>
              </div>
            </section>
          ) : (
            ""
          )} */}
        </section>
        <div className="d-flex mt-lg-2">
          <BiWallet
            className="side-icons"
            style={{
              color:
                location.pathname === "/dashboard/dashboardWallet"
                  ? "#6821C3"
                  : "black",
            }}
          />
          <Link
            to="/dashboard/dashboardWallet"
            className="Link-sideText ms-lg-2"
            style={{
              color:
                location.pathname === "/dashboard/dashboardWallet"
                  ? "#6821C3"
                  : "black",
            }}
          >
            <p>Wallet</p>
          </Link>
        </div>
        <div className="d-flex mt-lg-2">
          <BiMessageRoundedDetail
            className="side-icons"
            style={{
              color:
                location.pathname === "/dashboard/message"
                  ? "#6821C3"
                  : "black",
            }}
          />
          <Link
            to="/dashboard/message"
            className="Link-sideText ms-lg-2"
            style={{
              color:
                location.pathname === "/dashboard/message"
                  ? "#6821C3"
                  : "black",
            }}
          >
            <p>Message</p>
          </Link>
        </div>
        <div className="d-flex mt-lg-2">
          <MdNotificationsNone
            className="side-icons"
            style={{
              color:
                location.pathname === "/dashboard/notification"
                  ? "#6821C3"
                  : "black",
            }}
          />
          <Link
            to="/dashboard/notification"
            className="Link-sideText ms-lg-2"
            style={{
              color:
                location.pathname === "/dashboard/notification"
                  ? "#6821C3"
                  : "black",
            }}
          >
            <p>Notification</p>
          </Link>
        </div>
        <div className="d-flex mt-lg-2">
          <BsGraphUp
            className="side-icons"
            style={{
              color:
                location.pathname === "/dashboard/market" ? "#6821C3" : "black",
            }}
          />
          <Link
            to="/dashboard/market"
            className="Link-sideText ms-lg-2"
            style={{
              color:
                location.pathname === "/dashboard/market" ? "#6821C3" : "black",
            }}
          >
            <p>Market</p>
          </Link>
        </div>
      </section>
      <section>
        <article className="side-firstArt mt-lg-3 d-flex">
          <img
            src={activity}
            alt="activity icon"
            className="activity mt-lg-1"
          />
          <p className="ms-lg-4">Activity</p>
          <div className="ms-lg-2">
            {show === false ? (
              <RiArrowDropUpLine
                className="side-arrowIcon"
                onClick={() => setShow(true)}
              />
            ) : (
              <RiArrowDropDownLine
                className="side-arrowIcon"
                onClick={() => setShow(!true)}
              />
            )}
          </div>
        </article>
        <section className="mt-lg-2 activity_grp-content">
          {show ? (
            <section>
              <div className="d-flex">
                <ImFilm
                  className="side-icons"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                />
                <Link
                  to=""
                  className="Link-sideText ms-lg-2"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                >
                  <p>Video</p>
                </Link>
              </div>
              <div className="d-flex mt-lg-2">
                <FiMusic
                  className="side-icons"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                />
                <Link
                  to=""
                  className="Link-sideText ms-lg-2"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                >
                  <p>Music</p>
                </Link>
              </div>
              <div className="d-flex mt-lg-2">
                <BiMicrophone
                  className="side-icons"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                />
                <Link
                  to=""
                  className="Link-sideText ms-lg-2"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                >
                  <p>Podcast</p>
                </Link>
              </div>
              <div className="d-flex mt-lg-2">
                <BsCalendar4Event
                  className="side-icons"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                />
                <Link
                  to=""
                  className="Link-sideText ms-lg-2"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                >
                  <p>Event</p>
                </Link>
              </div>
              <div className="d-flex mt-lg-2">
                <TbDeviceGamepad2
                  className="side-icons"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                />
                <Link
                  to=""
                  className="Link-sideText ms-lg-2"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                >
                  <p>Game</p>
                </Link>
              </div>
              <div className="d-flex mt-lg-2">
                <BiMoviePlay
                  className="side-icons"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                />
                <Link
                  to=""
                  className="Link-sideText ms-lg-2"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                >
                  <p>Movie</p>
                </Link>
              </div>
              <div className="d-flex mt-lg-2">
                <MdMoreHoriz
                  className="side-icons"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                />
                <Link
                  to=""
                  className="Link-sideText ms-lg-2"
                  style={{
                    color: location.pathname === "" ? "#6821C3" : "black",
                  }}
                >
                  <p>More</p>
                </Link>
              </div>
            </section>
          ) : (
            ""
          )}
        </section>
      </section>
    </aside>
  );
};

export default SideBar;
