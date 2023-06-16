import React from 'react'

function Topmarket(props) {
  return (
    <tbody className='tbody'>
      <tr>
        <td>
          <span>{props.lovenumber}</span>
        </td>
        <td style={{ display: 'flex', marginLeft: '40%' }}>
          <img
            src={props.coinImg}
            style={{ marginRight: '2px', width: '25%' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <small style={{ fontSize: '13px' }}>{props.name}</small>
            <small style={{ marginTop: '-5px', fontSize: '11px' }}>
              {props.initials}
            </small>
          </div>
        </td>
        <td>
          <small style={{ fontSize: '13px' }}>{props.amount}</small>
        </td>
        <td>
          <img src={props.arrow} style={{ width: '14%' }} />
        </td>
      </tr>
      <div style={{ marginBottom: '20px' }}></div>
    </tbody>
  )
}

export default Topmarket
