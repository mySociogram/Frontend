import React, { useContext } from 'react'
import '../style/Home.css'
import '../components/Sidebar/Sidebar.css'
import avatar from '../assets/avatar.png'
import graph from '../assets/graph.png'
import picture from '../assets/picture.png'
import video from '../assets/video.png'
import { BsArrowRight } from 'react-icons/bs'
import './Mainbar.css'
import Card from '../components/Card'
import data from '../components/data'
import Token from '../components/Token'
import Topmarket from '../components/Topmarket'
import tokendata from '../components/tokendata'
import market from '../components/market'

const Home = () => {
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

  const token = tokendata.map((item) => {
    return (
      <Token
        key={item.id}
        name={item.lineone.name}
        dot={item.lineone.dot}
        initials={item.lineone.initials}
        graph={item.lineone.graph}
        percentage={item.lineone.percentage}
        available={item.linetwo.available}
        circulate={item.linetwo.circulation}
      />
    )
  })

  const marketdata = market.map((item) => {
    return (
      <Topmarket
        key={item.id}
        lovenumber={item.number}
        coinImg={item.coinImg}
        name={item.name}
        initials={item.initials}
        amount={item.amount}
        arrow={item.arrow}
        percentage={item.percentage}
      />
    )
  })

  return (
    <section>
      <article className='p-lg-4 mt-lg-4'>
        <div className='textbar p-lg-3 ms-lg-1'>
          <img src={avatar} alt='avatar' />
          <input
            type='search'
            placeholder='  Say something!'
            className='home-searchbar p-lg-1'
          />
          <article className='d-flex search-iconz'>
            <img src={graph} alt='graph' />
            <img src={picture} alt='picture' className='ms-lg-3' />
            <img src={video} alt='video' className='ms-lg-3' />
          </article>
        </div>
      </article>
      <div className='home'>
        <div className='mainbar'>
          <div className='mainbar1 mt-lg-3'>{cards}</div>
          <div className='mainbar2'>
            <div className='mainbar2-card'>
              <div className='mainbar2-details p-lg-3'>
                <h5 className='trend-token'>Trending token</h5>
                {token}
                <article className='view-trend text-end'>
                  <small>View trend</small>
                  <BsArrowRight className='ms-lg-2' />
                </article>
              </div>
            </div>
            <div className='mainbar-market p-lg-3'>
              <h5 className='trend-token'>Top market</h5>
              <section className='mt-lg-3'>
                <article className='d-flex market-heading'>
                  <p>#</p>
                  <p>NAME</p>
                  <p>PRICE</p>
                  <p>24H%</p>
                </article>
                {marketdata}
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
