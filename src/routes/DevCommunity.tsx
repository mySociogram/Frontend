import React from 'react'
import '../style/DevCommunity.css'
import graph1 from '../assets/graph1.png'
import avatar from '../assets/avatar.png'
import graph from '../assets/graph.png'
import picture from '../assets/picture.png'
import video from '../assets/video.png'
import developerIcon from '../assets/developer-icon.png'
import { BsArrowUp, BsThreeDots } from 'react-icons/bs'
import { BiMicrophone, BiMoviePlay, BiBriefcaseAlt } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { MdEventNote, MdMoreHoriz } from 'react-icons/md'
import { RiBookOpenLine } from 'react-icons/ri'
import { TbDeviceGamepad2, TbSpeakerphone } from 'react-icons/tb'
import data from '../components/data'
import Card from '../components/Card'

const DevCommunity = () => {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        displayImg={item.displayImg}
        name={item.name}
        username={item.username}
        comment={item.comment}
        coverImg={item.coverImg}
        tokenName={item.token.name}
        tokenImage={item.token.image}
        tokenNumber={item.token.number}
        loveIcon={item.loveIcon.image}
        loveNumber={item.loveIcon.number}
        commentIcon={item.commentIcon.icon}
        commentNumber={item.commentIcon.number}
        graphIcon={item.graphIcon.icon}
        graphNumber={item.graphIcon.number}
        flagImg={item.flagImg}
        menuButton={item.menuButton}
      />
    )
  })
  return (
    <section className='p-lg-5'>
      <header className='d-flex devComm'>
        <div className='textbar p-lg-3 ms-lg-1 textBar'>
          <img src={avatar} alt='avatar' />
          <input
            type='search'
            placeholder='  Say something!'
            className='home-searchbar p-lg-1 devCom-searchBar'
          />
          <article className='d-flex search-iconz'>
            <img src={graph} alt='graph' />
            <img src={picture} alt='picture' className='ms-lg-3' />
            <img src={video} alt='video' className='ms-lg-3' />
          </article>
        </div>
        <article className='d-flex art-devcomm'>
          <div className='d-flex mt-lg-3'>
            <img
              src={developerIcon}
              alt='Developer image'
              className='ms-lg-3'
            />
            <p className='ms-lg-2 devcomm-text'>Developer community</p>
          </div>
          <div>
            <IoIosArrowForward className='devCom-icon' />
          </div>
        </article>
      </header>
      <main className='mt-lg-5 d-flex main-devcom'>
        <section className='devCom-cards'>
          <div>{cards}</div>
        </section>
        <section className='ms-lg-4 comm-token'>
          <article className='p-lg-3 devCom-cards'>
            <div className='d-flex com-token'>
              <p>Community token</p>
              <BsThreeDots className='devcom-dots' />
            </div>
            <main
              className='mt-lg-2 p-lg-2 mb-lg-2 devCom-main'
              style={{ backgroundColor: 'black', color: '#fff' }}
            >
              <section className='d-flex avail mt-lg-2'>
                <article className='d-flex'>
                  <p>Available /24H</p>
                  <div className='d-flex ms-lg-2' style={{ color: '#41FF8D' }}>
                    <BsArrowUp className='arr-right' />
                    <p>3.11%</p>
                  </div>
                </article>
                <p>Like~5DVC</p>
              </section>
              <div className='devCom-large mt-lg-2'>
                <p>997,643,520.7609</p>
              </div>
              <div>
                <img src={graph1} alt='graph' />
              </div>
            </main>
          </article>
          <article className='p-lg-3 mt-lg-4 devCom-tools'>
            <h6>Tools</h6>
            <main>
              <article className='devTools-art mt-lg-4'>
                <section>
                  <div className='devTools-icon'>
                    <MdEventNote />
                  </div>
                  <p>Event</p>
                </section>
                <section>
                  <div className='devTools-icon'>
                    <RiBookOpenLine />
                  </div>
                  <p>Resources</p>
                </section>
                <section>
                  <div className='devTools-icon'>
                    <TbDeviceGamepad2 />
                  </div>
                  <p>Game</p>
                </section>
                <section>
                  <div className='devTools-icon'>
                    <TbSpeakerphone />
                  </div>
                  <p>Ads</p>
                </section>
              </article>
              <article className='devTools-art mt-lg-2 mb-lg-2'>
                <section>
                  <div className='devTools-icon'>
                    <BiMicrophone />
                  </div>
                  <p>Podcast</p>
                </section>
                <section>
                  <div className='devTools-icon'>
                    <BiMoviePlay />
                  </div>
                  <p>Movie</p>
                </section>
                <section>
                  <div className='devTools-icon'>
                    <BiBriefcaseAlt />
                  </div>
                  <p>Services</p>
                </section>
                <section>
                  <div className='devTools-icon'>
                    <MdMoreHoriz />
                  </div>
                  <p>More</p>
                </section>
              </article>
            </main>
          </article>
        </section>
      </main>
    </section>
  )
}

export default DevCommunity
