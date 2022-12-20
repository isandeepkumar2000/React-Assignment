import './index.css'
import {Component} from "react"

class SpeedoMeter extends Component{
    state = {speed: 0}

    Accelerate = () => {

const{speed} = this.state
if(speed < 200){
    this.setState(eachspeed => ({
speed: eachspeed.speed + 10
    }))
}
    }
    ApplyBrake = ()=>{
        const{speed} = this.state
        if(speed > 0){
            this.setState(eachspeed => ({
        speed: eachspeed.speed -10
            }))
        }

    }

    render(){
        const {speed} = this.state
        return(
            <div className = "Speedometer-Container">
            <div className = "image-Box">
<img  className = "image" src = "https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt=""/>
</div>
<div className='items-box'>
<h1 className='Car-speed-heading'>Speed is {speed}mph</h1>
<p className='Car-speed-Paragraph'>Min Limit Is 0mph, Max Limit is 200mph</p>
<div className='Car-button'>
<button onClick = {this.Accelerate}>Accelerate</button>
<button onClick = {this.ApplyBrake}>Apply Brake</button>
</div>
</div>            
            </div>
        )
    }
}

export default SpeedoMeter;