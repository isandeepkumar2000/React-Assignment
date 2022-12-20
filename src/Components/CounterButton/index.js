import React, {Component} from 'react';

import './index.css'

class Counter extends Component {
    state = {count: 0 }
    CountNumber = () => {
       this.setState((previousSate) => {
        return {count : previousSate.count + 1}
       })
    }
    render(){
        const {count} = this.state;
        return(
<div className='Count-Container'>
<h1 className = "Counter-Heading"> The Button Has Been Clicked <br/> <span>{count} Times</span></h1>
<p className='paragraph-counter'>Please Click the button to Increase The Count</p>
<button className='button' onClick = {this.CountNumber}> Click Me!!</button>
</div>

        )
    }
}

export default Counter