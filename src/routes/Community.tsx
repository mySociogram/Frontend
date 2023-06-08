import React from "react";
import "../style/Community.css";
import designIcon from "../assets/design-icon.png";
import clownIcon from "../assets/clown-icon.png";
import memberInfo_icon from "../assets/users-member.png";
import onlineInfo_icon from "../assets/green-circle.png";
import mcapInfo_icon from "../assets/coins.png";

const Community = () => {
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

  return (
    <main className="community_page-wrapper">
      <section className="suggestion-section">
        <p className="community_sub-titles">Suggested for you</p>
        <div className="suggestion_cards-wrapper">
          {communitySuggestions?.map((el: any, i: any) => (
            <div key={i} className="suggestion_card">
              <img className="suggestion_card-icon" src={el.icon} alt="" />
              <p className="suggestion_card-name">{el.name}</p>
              <p className="suggestion_card-info">{el.info}</p>
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
        <p className="community_sub-titles">My Communities</p>
        <div className="my_communities-wrapper">
          {myCommunities?.map((el: any, i: any) => (
            <div key={i} className="my_community-card">
              <img
                className="my_community-icon"
                src={el.icon}
                alt="community-icon"
              />
              <div>
                <p className="my_community-name">{el.name}</p>
                <p className="my_community-desc">{el.desc}</p>
                <div className="my_community-info-section">
                  <div className="my_community-info">
                    <img src={memberInfo_icon} alt="members-icon" />
                    <p>{el.members}</p>
                  </div>
                  <div className="my_community-info">
                    <img src={mcapInfo_icon} alt="coin-icon" />
                    <p>{el.mCap}</p>
                  </div>
                  <div className="my_community-info">
                    <img src={onlineInfo_icon} alt="online-icon" />
                    <p>{el.online}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Community;
