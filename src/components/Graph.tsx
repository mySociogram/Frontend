import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const Graph = () => {
  const data = [
    { name: '04 May', uv: 80, pv: 2400, amt: 2400 },
    { name: '09 May', uv: 200, pv: 2400, amt: 2400 },
    { name: '12 May', uv: 370, pv: 2400, amt: 2400 },
    { name: '19 May', uv: 390, pv: 2400, amt: 2400 },
    { name: '23 May', uv: 480, pv: 2400, amt: 2400 },
    { name: '28 May', uv: 420, pv: 2400, amt: 2400 },
  ]
  return (
    <section className='mt-lg-4 dashWallet-graph'>
      <LineChart
        width={580}
        height={200}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        className='lineChart'
      >
        <Line type='monotone' dataKey='uv' stroke='#6821c3' />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
      </LineChart>
    </section>
  )
}

export default Graph
