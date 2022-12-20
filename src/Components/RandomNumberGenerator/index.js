import React, { Component } from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {Count: 0}
    GenerateNumberButton = () => {
        this.setState((prevstate) => ({
            Count: Math.floor(Math.random() * 100 + 1),
          }));
    }
  
    render() {
        const {Count} = this.state
    return (
       
      <div className='RandomNumberGenerator-Conntaner'>
        <div className='RandomNumberGenerator-items'>
            <h1 className='RandomNumberGenerator-Heading'>Random Number</h1>
            <p className='RandomNumberGenerator-Paragraph'>Generate a rondom number in the<br/><span>range of 0 to 100</span></p>

            <div className='RandomNumberGenerator-Button'>
                <button className='RandomNumber-Button' onClick={this.GenerateNumberButton}>
                    Generate
                </button>
                <p className='GererateNumberResult'>{Count}</p>
            </div>
        </div>
      </div>
    )
  }
}
 export default RandomNumberGenerator;