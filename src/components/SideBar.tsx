import React, { useState } from 'react'
import '../style/SideBar.css'
import { AiOutlineHome } from 'react-icons/ai'
import {
  BiWallet,
  BiMessageRoundedDetail,
  BiMicrophone,
  BiMoviePlay,
} from 'react-icons/bi'
import { BsFillPeopleFill, BsGraphUp, BsCalendar4Event } from 'react-icons/bs'
import { MdNotificationsNone } from 'react-icons/md'
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri'
import { ImFilm } from 'react-icons/im'
import { FiMusic } from 'react-icons/fi'
import { TbDeviceGamepad2 } from 'react-icons/tb'
import { MdMoreHoriz } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import activity from '../assets/activity.png'

const SideBar = () => {
  const [show, setShow] = useState(false)
  const location = useLocation()
  return (
    <aside className='sidebar p-lg-5'>
      <section>
        <div className='d-flex'>
          <AiOutlineHome
            className='side-icons'
            style={{
              color: location.pathname === '/' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/'
            className='Link-sideText ms-lg-2'
            style={{
              color: location.pathname === '/' ? '#6821C3' : 'black',
            }}
          >
            <p>Home</p>
          </Link>
        </div>
        <div className='d-flex mt-lg-2'>
          <BsFillPeopleFill
            className='side-icons'
            style={{
              color: location.pathname === '/community' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/community'
            className='Link-sideText ms-lg-2'
            style={{
              color: location.pathname === '/community' ? '#6821C3' : 'black',
            }}
          >
            <p>Community</p>
          </Link>
        </div>
        <div className='d-flex mt-lg-2'>
          <BiWallet
            className='side-icons'
            style={{
              color:
                location.pathname === '/dashboardWallet' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/dashboardWallet'
            className='Link-sideText ms-lg-2'
            style={{
              color:
                location.pathname === '/dashboardWallet' ? '#6821C3' : 'black',
            }}
          >
            <p>Wallet</p>
          </Link>
        </div>
        <div className='d-flex mt-lg-2'>
          <BiMessageRoundedDetail
            className='side-icons'
            style={{
              color: location.pathname === '/message' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/message'
            className='Link-sideText ms-lg-2'
            style={{
              color: location.pathname === '/message' ? '#6821C3' : 'black',
            }}
          >
            <p>Message</p>
          </Link>
        </div>
        <div className='d-flex mt-lg-2'>
          <MdNotificationsNone
            className='side-icons'
            style={{
              color:
                location.pathname === '/notification' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/notification'
            className='Link-sideText ms-lg-2'
            style={{
              color:
                location.pathname === '/notification' ? '#6821C3' : 'black',
            }}
          >
            <p>Notification</p>
          </Link>
        </div>
        <div className='d-flex mt-lg-2'>
          <BsGraphUp
            className='side-icons'
            style={{
              color: location.pathname === '/market' ? '#6821C3' : 'black',
            }}
          />
          <Link
            to='/market'
            className='Link-sideText ms-lg-2'
            style={{
              color: location.pathname === '/market' ? '#6821C3' : 'black',
            }}
          >
            <p>Market</p>
          </Link>
        </div>
      </section>
      <section>
        <article className='side-firstArt mt-lg-3 d-flex'>
          <img
            src={activity}
            alt='activity icon'
            className='activity mt-lg-1'
          />
          <p className='ms-lg-4'>Activity</p>
          <div className='ms-lg-2'>
            {show === false ? (
              <RiArrowDropUpLine
                className='side-arrowIcon'
                onClick={() => setShow(true)}
              />
            ) : (
              <RiArrowDropDownLine
                className='side-arrowIcon'
                onClick={() => setShow(!true)}
              />
            )}
          </div>
        </article>
        <section className='mt-lg-2 activity_grp-content'>
          {show ? (
            <section>
              <div className='d-flex'>
                <ImFilm
                  className='side-icons'
                  style={{
                    color: location.pathname === '/video' ? '#6821C3' : 'black',
                  }}
                />
                <Link
                  to='/video'
                  className='Link-sideText ms-lg-2'
                  style={{
                    color: location.pathname === '/video' ? '#6821C3' : 'black',
                  }}
                >
                  <p>Video</p>
                </Link>
              </div>
              <div className='d-flex mt-lg-2'>
                <FiMusic
                  className='side-icons'
                  style={{
                    color: location.pathname === '/music' ? '#6821C3' : 'black',
                  }}
                />
                <Link
                  to='/music'
                  className='Link-sideText ms-lg-2'
                  style={{
                    color: location.pathname === '/music' ? '#6821C3' : 'black',
                  }}
                >
                  <p>Music</p>
                </Link>
              </div>
              <div className='d-flex mt-lg-2'>
                <BiMicrophone
                  className='side-icons'
                  style={{
                    color:
                      location.pathname === '/podcast' ? '#6821C3' : 'black',
                  }}
                />
                <Link
                  to='/podcast'
                  className='Link-sideText ms-lg-2'
                  style={{
                    color:
                      location.pathname === '/podcast' ? '#6821C3' : 'black',
                  }}
                >
                  <p>Podcast</p>
                </Link>
              </div>
              <div className='d-flex mt-lg-2'>
                <BsCalendar4Event
                  className='side-icons'
                  style={{
                    color: location.pathname === '/event' ? '#6821C3' : 'black',
                  }}
                />
                <Link
                  to='/event'
                  className='Link-sideText ms-lg-2'
                  style={{
                    color: location.pathname === '/event' ? '#6821C3' : 'black',
                  }}
                >
                  <p>Event</p>
                </Link>
              </div>
              <div className='d-flex mt-lg-2'>
                <TbDeviceGamepad2
                  className='side-icons'
                  style={{
                    color: location.pathname === '/game' ? '#6821C3' : 'black',
                  }}
                />
                <Link
                  to='/game'
                  className='Link-sideText ms-lg-2'
                  style={{
                    color: location.pathname === '/game' ? '#6821C3' : 'black',
                  }}
                >
                  <p>Game</p>
                </Link>
              </div>
              <div className='d-flex mt-lg-2'>
                <BiMoviePlay
                  className='side-icons'
                  style={{
                    color: location.pathname === '/movie' ? '#6821C3' : 'black',
                  }}
                />
                <Link
                  to='/movie'
                  className='Link-sideText ms-lg-2'
                  style={{
                    color: location.pathname === '/movie' ? '#6821C3' : 'black',
                  }}
                >
                  <p>Movie</p>
                </Link>
              </div>
              <div className='d-flex mt-lg-2'>
                <MdMoreHoriz
                  className='side-icons'
                  style={{
                    color: location.pathname === '/more' ? '#6821C3' : 'black',
                  }}
                />
                <Link
                  to='/more'
                  className='Link-sideText ms-lg-2'
                  style={{
                    color: location.pathname === '/more' ? '#6821C3' : 'black',
                  }}
                >
                  <p>More</p>
                </Link>
              </div>
            </section>
          ) : (
            ''
          )}
        </section>
      </section>
    </aside>
  )
}

export default SideBar
