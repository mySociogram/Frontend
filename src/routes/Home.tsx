import React from 'react'
import '../style/Home.css'
import '../components/Sidebar/Sidebar.css'
import { TbGridDots } from 'react-icons/tb'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
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
      <article>Hello world</article>
      <div className='home mt-lg-3'>
        <div className='mainbar'>
          <div className='mainbar1'>{cards}</div>
          <div className='mainbar2 border border-danger'>
            <div className='mainbar2-card'>
              <div className='mainbar2-details'>
                <h5 style={{ marginLeft: '6%' }}>Popular token</h5>
                {token}
                <small>
                  View trend
                  <img
                    src='./img/Vect.png'
                    style={{ width: '3%', marginLeft: '5px' }}
                  />
                </small>
              </div>
            </div>
            <div className='mainbar-market'>
              <h5 style={{ fontWeight: 300 }}>Top market</h5>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>24H %</th>
                  </tr>
                </thead>
                <div style={{ marginBottom: '15px' }}></div>
                {marketdata}
                <div style={{ marginBottom: '15px' }}></div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
