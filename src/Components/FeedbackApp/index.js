import './index.css'
import FeedbackArrayList from './FeedbackArrayList/FeedbackArrayList'
import React, { Component } from 'react'


class FeedbackApp extends Component {
state = {ischange: "true"}

onChangeResponse = () => {
   
    this.setState(  {
       ischange: "false"
    })

}
originPage = () => {

    return (
        <div className='emoji'>
      <div className="emojis-container">
        <h1 className='head'>
          How satisfied are you with our
          <br />
          customer support performance?
        </h1>
        <ul className="emoji-container">
          {FeedbackArrayList.map(emoji => (
            <li className="list-container">
              <div
                onClick={this.onChangeResponse}
              >
                <img src={emoji.imageUrl} alt={emoji.Name} className={emoji.className} />
                <p className='para'>{emoji.Name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    )
  }

  feedBackPage = () => {
    return (
        <div className='tq'>
      <div className="tq-container">
        <img className = "image" src= "https://assets.ccbp.in/frontend/react-js/love-emoji-img.png" alt="love emoji" />
        <h1 className='heading'>Thank You</h1>
        <p className='paragrpah'>
          we will use your feedback to improve our customer support
          <br />
          performance.
        </p>
      </div>
      </div>
    )
  }

  render() {
    const {ischange} = this.state
    console.log(ischange)
    return (
       <>{ischange === 'true' ? this.originPage() : this.feedBackPage()}</>
         
    )
  }
}
export default FeedbackApp