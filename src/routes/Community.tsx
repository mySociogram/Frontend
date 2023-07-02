import React, { useEffect, useState, useContext, createContext } from "react";
import "../style/Community.css";
import designIcon from "../assets/design-icon.png";
import clownIcon from "../assets/clown-icon.png";
import memberInfo_icon from "../assets/users-member.png";
import onlineInfo_icon from "../assets/green-circle.png";
import mcapInfo_icon from "../assets/coins.png";
import axios from "axios";
import CustomModal from "../components/CustomModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { displayError } from "../components/DisplayToastError";
import CreateCommunityForm from "..//components/CreateCommunityForm";
interface CommunitiesProp {
  about: string;
  communityName: string;
  id: string;
  userId: string;
  users: string[];
}
export const AllCommunitiesContext = createContext([]);

const Community = () => {
  const [allCommunities, setAllCommunities] = useState<CommunitiesProp[]>([]);
  const [userWalletAddress, setUserWalletAddress] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userCommunities, setUserCommunities] = useState<any[]>([]);
  const [clickedCommunity, setClickedCommunity] = useState<any>(null);
  const [clickView, setClickView] = useState<boolean>(false);
  const [clickJoin, setClickJoin] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clickCreate, setClickCreate] = useState<boolean>(false);

  const communitySuggestions: Array<any> = [
    { icon: designIcon, name: "Design", info: "53.1k members" },
    { icon: designIcon, name: "Developer", info: "53.1k members" },
    { icon: designIcon, name: "Clown", info: "53.1k members" },
    { icon: designIcon, name: "Project Managers", info: "53.1k members" },
    { icon: designIcon, name: "QA Team", info: "53.1k members" },
  ];
  const featuredCommunities: Array<any> = [
    { video: "https://www.youtube.com/embed?v=H9fg7GFagF4", name: "Design" },
    { video: "https://www.youtube.com/embed?v=H9fg7GFagF4", name: "Developer" },
    { video: "https://www.youtube.com/embed?v=H9fg7GFagF4", name: "Clown" },
    {
      video: "https://www.youtube.com/embed?v=H9fg7GFagF4",
      name: "Project Managers",
    },
  ];
  const myCommunities: Array<any> = [
    {
      icon: designIcon,
      name: "Developer",
      desc: "We are developers we build solution with code. Join us if this is you, see you soon. We are developers we build solution with code. Join us if this is",
      members: "53.1k members",
      mCap: "$5.19 MCap",
      online: "23k Online",
    },
    {
      icon: clownIcon,
      name: "Clown",
      desc: "Fun crazy people are here. If you think you are crazier and funny we dare you to join us and show us what you gat. WARNING: Be brave jokes is not for the faint mind",
      members: "53.1k members",
      mCap: "$5.19 MCap",
      online: "23k Online",
    },
  ];

  const getAllCommunities = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/community/getAllCommunities"
      );
      setAllCommunities(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3005/users/allUsers");
      console.log(response.data.allUsers);

      const currentUser = response.data.allUsers.filter(
        (user: { walletId: string }) => user.walletId === userWalletAddress
      )[0];
      setCurrentUser(currentUser);
    } catch (error) {
      console.error(error);
    }
  };

  const viewCommunities = () => {
    setClickView(true);
  };

  const joinCommunity = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3005/community/joinCommunity/${clickedCommunity.id}`,
        { userId: currentUser.id }
      );
      if ((response.status = 200)) {
        toast.success(response.data.message);
        setTimeout(() => {
          closeModal();
        }, 3000);
        console.log(response);
      }
    } catch (error) {
      console.error(error);
      displayError(error);
      setTimeout(() => {
        closeModal();
      }, 3000);
    }
  };

  const openModal = (community: any) => {
    setClickedCommunity(community);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setClickJoin(false);
    setClickView(false);
  };

  const leaveCommunity = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3005/community/leaveCommunity/${clickedCommunity?.id}`,
        { userId: currentUser.id }
      );
      if ((response.status = 200)) {
        toast.success(response.data.message);
        setTimeout(() => {
          closeModal();
        }, 3000);
      }
      console.log(response);
    } catch (error) {
      displayError(error);
      setTimeout(() => {
        closeModal();
      }, 3000);
    }
  };
  let currentUserCommunities: any[];
  if (clickView) {
    currentUserCommunities = allCommunities;
  }
  currentUserCommunities = allCommunities.filter((community) =>
    community.users.includes(currentUser?.id)
  );
  localStorage.setItem(
    "userCommunities",
    JSON.stringify(currentUserCommunities)
  );

  useEffect(() => {
    const addressFromStorage = localStorage.getItem("address");
    if (addressFromStorage) {
      const currentUserWalletAddress = JSON.parse(addressFromStorage);
      setUserWalletAddress(currentUserWalletAddress);
      getAllUsers();
      getAllCommunities();
    }
  }, [userWalletAddress, isOpen, clickView, clickJoin]);
  console.log(currentUserCommunities);

  return (
    <main className="community_page-wrapper">
      <section className="suggestion-section">
        <p className="community_sub-titles">Suggested for you</p>
        <div className="suggestion_cards-wrapper">
          {allCommunities?.map((el: any, i: any) => (
            <div
              key={i}
              className="suggestion_card"
              onClick={() => {
                openModal(el);
                setClickJoin(true);
              }}
            >
              <img
                className="suggestion_card-icon"
                src={communitySuggestions[i]?.icon}
                alt=""
              />
              <p className="suggestion_card-name">{el.communityName}</p>
              <p className="suggestion_card-info">
                {communitySuggestions[i]?.info}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="featured-section">
        <p className="community_sub-titles">Features Communities</p>
        <div className="featured_cards-wrapper">
          {featuredCommunities?.map((el: any, i: any) => (
            <div key={i} className="featured_card">
              <iframe
                name={`${el.name}-iframe`}
                className="featured_card-video"
                src={el.video}
              ></iframe>
              <p className="featured_card-name">{el.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my_communities-section">
        <div className="myComm">
          <span className="community_sub-titles">My Communities</span>
          <button
            onClick={() => {
              setClickCreate(true);
              setIsOpen(true);
            }}
            className="createComm"
          >
            Create Community
          </button>
        </div>
        {clickView && (
          <div className="chooseComm">
            <span>Click on a Community below to Join</span>{" "}
            <span className="goBack" onClick={() => setClickView(false)}>
              Go back
            </span>
          </div>
        )}
        <div className="my_communities-wrapper">
          {currentUserCommunities.length === 0 && (
            <div className="oops">
              <p>Oops! No community to show yet.</p>
              <button onClick={viewCommunities}>Join Community</button>
            </div>
          )}
          {currentUserCommunities.length > 0 &&
            currentUserCommunities.map((el: any, i: any) => (
              <div
                key={i}
                className="my_community-card"
                onClick={clickView ? () => openModal(el) : undefined}
              >
                <img
                  className="my_community-icon"
                  src={communitySuggestions[i].icon}
                  alt="community-icon"
                />
                <div>
                  <p className="my_community-name">{el.communityName}</p>
                  <p className="my_community-desc">{el.about}</p>
                  <div className="my_community-info-section">
                    <div className="my_community-info">
                      <img src={memberInfo_icon} alt="members-icon" />
                      <p>{communitySuggestions[i].members}</p>
                    </div>
                    <div className="my_community-info">
                      <img src={mcapInfo_icon} alt="coin-icon" />
                      <p>{communitySuggestions[i].mCap}</p>
                    </div>
                    <div className="my_community-info">
                      <img src={onlineInfo_icon} alt="online-icon" />
                      <p>{communitySuggestions[i].online}</p>
                    </div>
                  </div>
                </div>
                {!clickView && (
                  <button onClick={() => openModal(el)} className="leaveComm">
                    Leave Community
                  </button>
                )}
              </div>
            ))}
        </div>
      </section>
      {isOpen && (
        <CustomModal
          isOpen={isOpen}
          children={
            clickCreate ? (
              <CreateCommunityForm
                userId={currentUser.id}
                handleClick={closeModal}
              />
            ) : (
              <div className="modalContentWrapper">
                {clickJoin || clickView ? (
                  <span>
                    You are about to join {clickedCommunity.communityName}{" "}
                    community. Click Yes to proceed
                  </span>
                ) : (
                  <span>
                    Are you sure you want to leave{" "}
                    {clickedCommunity.communityName} community?
                  </span>
                )}

                <div>
                  <button
                    onClick={
                      clickJoin || clickView ? joinCommunity : leaveCommunity
                    }
                  >
                    Yes
                  </button>
                  <button onClick={closeModal}>No</button>
                </div>
              </div>
            )
          }
        />
      )}
      <ToastContainer />
    </main>
  );
};

export default Community;
