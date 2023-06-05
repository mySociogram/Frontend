import React from 'react'

import tokendata from './tokendata'

function Token(props) {
  return (
    <div className='tokenCard'>
      <div className='tokenCard-Ist'>
        <h6 style={{margin: 0}}>{props.name}</h6>
        <h4 style={{color: 'gray'}}>{props.dot}</h4>
        <small style={{color: 'gray', fontSize: '12px'}}>{props.initials}</small>
        <img src={`./img/${props.graph}`}/>
        <h5 style={{color:'#6821C3', fontSize: '12px'}}>{props.percentage}</h5>
      </div>
      <div className='tokenCard-second'>
        <small>{props.available}</small>
        <span>.</span>
        <small style={{color: '#FF7676'}}>{props.circulate}</small>
      </div>
      
    </div>
  )
}

export default Token
