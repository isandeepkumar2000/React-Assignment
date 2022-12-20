import  { Component } from 'react'
import './index.css'
class DarkLightMode extends Component {
state = {DarkLight: false }
  DarkMode = () => {
 
    this.setState(prevstate => ({ DarkLight: !prevstate.DarkLight}));
  }

  render() {
    const{DarkLight} = this.state
    const Name = DarkLight ? "DarkBox" : "LightBox"
    return (
      <div className={Name}>
        <div className='DarkLight-Items'>
          <h1 className='DarkLight-Heading'>Click To Change the Mode</h1>
<div className='DarkLight-Button'>

  <button className='Button'onClick={this.DarkMode}>{this.state.DarkLight ? "Light Mode" : "Dark Mode"}</button>
</div>
        </div>

      </div>
    )
  }
}
export default DarkLightMode

