import { Component } from 'react'
import './index.css'

class LetterCalCulator extends Component {

    state = {setCharacterCount: ""}

    calculateText = (event) => {
      this.setState({
        setCharacterCount:event.target.value
      })
    }

  render() {
    const {setCharacterCount} = this.state
    return (
      <div className='LetterCalculator-Conatiner'>
        <div className='LetterCalculator-items'>
    <div className='Image-join'>
            <h1 className='LetterCalculator-heaading'>Calculate the <br/> Letters you <br/> enter</h1>
            <div className='LetterCalculator-Paragraph-inputBox'>
                <p className='LetterCalculator-paragraph'>Enter the phrase</p>
                <input  onChange={this.calculateText} type = "text" className='LetterCalculator-textArea' placeholder='Please Type!'/>
            </div>
            <p className='LetterCalculator-NoofLetter-Box'>No.of letters: <span>{setCharacterCount.length}</span></p>
            </div>
        
        <div className='LetterCalculator-Image-Text'>
                <img className='image' src = "https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt='Letter CalCulator' />
          </div>
          </div>
      </div>
    )
  }
}
export default LetterCalCulator