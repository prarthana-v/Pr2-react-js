import React, { Component } from 'react'
import './style.css'

class Counter extends Component {
  constructor(props) {
    super()
    console.log(props);
    this.state = {
      count: 0
    }
  }

  onPlus() {
    this.setState({
      count: this.state.count + 1
    })
  }
  onMinus() {
    this.setState({
      count: this.state.count - 1
    })
  }
  onReset() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div align="center" className='container'>
        <h1> Counter App</h1>
        <div className="" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>

          <button className='btn' onClick={() => this.onPlus()}>+</button>
          <span className='count'>{this.state.count}</span>
          {
            this.state.count === 0 ? (
              <button disabled className='btn' onClick={() => this.onMinus()}>-</button>
            ) : (
              <button className='btn' onClick={() => this.onMinus()}>-</button>
            )
          }
        </div>

        <div className="" style={{ margin: '20px' }}>
          <button className='btn' onClick={() => this.onReset()}>reset</button>
        </div>
      </div>
    )
  }
}

export default Counter
