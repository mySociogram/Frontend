import React from 'react'
import './Card.css'
import data from './data'

function Card(props) {
  return (
    <div className='display-card'>
      <img src={props.displayImg} className='display-picture' />
      <div className='card-details'>
        <h6>{props.name}</h6>
        <small>{props.username}</small>
        <p>{props.comment}</p>
        <img src={props.coverImg} style={{ width: '100%' }} />
        <div className='actions-column' style={{marginTop: props.coverImg === '' ? '-20px':''}}>
          <div className='dnc'>
            <small>{props.tokenName}</small>
            <img
              src={props.tokenImage}
              style={{ width: '18px', height: '15px' }}
            />
            <small>{props.tokenNumber}</small>
          </div>
          <div className='icons-reaction'>
            <img
              src={props.loveIcon}
              style={{ width: '15px', height: '14px' }}
            />
            <small>{props.loveNumber}</small>
          </div>
          <div className='icons-reaction'>
            <img
              src={props.commentIcon}
              style={{ width: '15px', height: '14px' }}
            />
            <small>{props.commentNumber}</small>
          </div>
          <div className='icons-reaction'>
            <img
              src={props.graphIcon}
              style={{ width: '15px', height: '14px' }}
            />
            <small>{props.graphNumber}</small>
          </div>
          <div className='icons-reaction'>
            <img
              src={props.flagImg}
              style={{ width: '15px', height: '14px' }}
            />
          </div>
        </div>
      </div>
      <img src={props.menuButton} style={{ marginLeft: '10px' }} />
    </div>
  )
}

export default Card
