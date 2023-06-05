import React from 'react'
import "./Sidebar.css"
import { TbGridDots } from "react-icons/tb";
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  function sideToggleMenu(){
    setIsOpen(prevMenu => !prevMenu)
  }
  return (
    <div className='sidebar'>
      <section>
        <div className='sidebar1'>
          <div className='home-option'>
            <img src='./img/Vector.png'/>
            <small>Home</small>
          </div>
          <div className='home-option'>
            <img src='./img/Vector (1).png'/>
            <small>Community</small>
          </div>
          <div className='home-option'>
            <img src='./img/Vector (2).png'/>
            <small>Wallet</small>
          </div>
          <div className='home-option'>
            <img src='./img/Vector (3).png'/>
            <small>Message</small>
          </div>
          <div className='home-option'>
            <img src='./img/Vector (4).png'/>
            <small>Notification</small>
          </div>
          <div className='home-option'>
            <img src='./img/Vector (5).png'/>
            <small>Market</small>
          </div>

        </div>
      </section>

        <div className='sidebar2'>
          <div className='activity'>
            <div style={{marginRight:"10px",display:'flex', alignItems: 'center'}} >
              <TbGridDots />
            </div>
            <small>Activity</small>
            <div style={{marginLeft:"10px",display:'flex', alignItems: 'center', width:'12px'}} >

              {isOpen ? (
                <AiOutlineUp onClick={sideToggleMenu}/>
              ) : (
                <AiOutlineDown onClick={sideToggleMenu}/>
              )}
            </div>
          </div>
          {isOpen && (
              <div className='activity-grp'>
                <div className='activity-option'>
                  <img src='./img/Vector (6).png'/>
                  <small>Video</small>
                </div>
                <div className='activity-option'>
                  <img src='./img/Vector (7).png'/>
                  <small>Music</small>
                </div>
                <div className='activity-option'>
                  <img src='./img/Vector (8).png'/>
                  <small>Podcasts</small>
                </div>
                <div className='activity-option'>
                  <img src='./img/Vector (9).png'/>
                  <small>Event</small>
                </div>
                <div className='activity-option'>
                  <img src='./img/Vector (10).png'/>
                  <small>Game</small>
                </div>
                <div className='activity-option'>
                  <img src='./img/Vector (11).png'/>
                  <small>Movie</small>
                </div>
                <div className='activity-option'>
                  <img src='./img/Vector (12).png'/>
                  <small>More</small>
                </div>
              </div>
            )}
        </div>

        
      
    </div>

  )
}

export default Sidebar