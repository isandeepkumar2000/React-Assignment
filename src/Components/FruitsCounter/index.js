import './index.css'

import {Component} from "react"

class FruitsCounter extends Component {
state = {Mango: 0,Banana: 0}


Mango = () =>{
    this.setState((items) => {
        return {Mango : items.Mango + 1}
       })
}
Banana = () =>{
this.setState((items) =>{
    return {Banana: items.Banana + 1}
})
}
    
    render(){
        const {Mango,Banana} = this.state;
    
        return(
          
            
<div className='Fruits-Container'>
    <h1 className='fruits-Heading'>KV Sir ate {Mango} Mangoes {Banana} bananas</h1>
<div className='Fruits-items'>
    <div className='Fruit-Mango'>
        <img className='Mango' src = "https://assets.ccbp.in/frontend/react-js/mango-img.png" alt = "Mango"/>
       <div>
       <button className='Mango-button' onClick = {this.Mango}>Eat Mango</button>
       </div> 
    </div>

    <div className='Fruits-Banana'>
    <img className='Banana'  src = "https://assets.ccbp.in/frontend/react-js/banana-img.png" alt = "Banana"/>
   <div> <button className='Banana-button' onClick = {this.Banana}>Eat Banana</button>
   </div>
    </div>
</div>
</div>
         
        )
    }
}
export default FruitsCounter;