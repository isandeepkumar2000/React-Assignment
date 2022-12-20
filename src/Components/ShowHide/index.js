import  { Component } from 'react'
import './index.css'


class ShowHide extends Component {
state = {First: false, Last: false}
    FirstName = () => { 
            this.setState(prevstate => ({ First: !prevstate.First}));
    }
    LastName = () => {
        this.setState(prevstate => ({ Last: !prevstate.Last}));
    }

  render() {
    const {First,Last} = this.state
    return (
  
      <div className='HideShow-Container'>
        <div className='HideShow-items'>
            <h1 className='HideShow-Heading'>Show/Hide</h1>
            <div className='HideShow-Button'>
            <div className='HideShow-Button-First'>
                <button className='FirstName' onClick={this.FirstName}>Show/Hide FirstName</button>
                {First?<p className='HideShow-Joe'>Joe</p>:null}
                </div>

                <div className='HideShow-Button-Last'>
                <button  className='LastName'onClick={this.LastName}>Show/Hide LastName</button>
                {Last?<p className='HideShow-Johee'>Johee</p>:null}
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default ShowHide;
