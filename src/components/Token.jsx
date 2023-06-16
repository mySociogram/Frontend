import React from 'react'

import tokendata from './tokendata'

function Token(props) {
  return (
    <section>
      <div className='tokenCard'>
        <div className='tokenCard-Ist mt-lg-2'>
          <h6 className='mt-lg-1'>{props.name}</h6>
          <h4 style={{ color: 'gray' }} className='token-dot'>
            {props.dot}
          </h4>
          <small style={{ color: 'gray', fontSize: '12px' }}>
            {props.initials}
          </small>
          <img src={props.graph} />
          <h5 style={{ color: '#6821C3', fontSize: '12px' }}>
            {props.percentage}
          </h5>
        </div>
        <div className='tokenCard-second'>
          <small>{props.available}</small>
          <span>.</span>
          <small style={{ color: '#FF7676' }}>{props.circulate}</small>
        </div>
      </div>
      <hr />
    </section>
  )
}

export default Token
