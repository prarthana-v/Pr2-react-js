import React from 'react'
import './style.css'
const Counter = ({ cnt, onPlus, onMinus, onReset }) => {
  return (
    <div>

      <div className="" align="center">
        <h1 style={{ fontSize: '40px' }}>The Counter App</h1>
        <p style={{ fontSize: '50px', fontWeight: '600' }}>{cnt}</p>
        <button onClick={() => onPlus()} className='btn'>+</button>
        {
          cnt <= 0 ? (
            <button disabled onClick={() => onMinus()} className='btn'>-</button>
          ) :
            (
              <button onClick={() => onMinus()} className='btn'>-</button>
            )
        }
        <button onClick={() => onReset()} className='btn'>0</button>
      </div>
    </div>
  )
}

export default Counter
