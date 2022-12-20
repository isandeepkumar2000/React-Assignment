import './index.css'
import React, {Component} from 'react';

class Welcome extends Component{
    state = {isSubscribe: false}
    isChange = () => {;
        this.setState(state => ({
           isSubscribe: !state.isSubscribe 
        }));
    }
    render(){
        return(
            <div className='Welcome-Container'>
            <div className='Welcome-items'>
            <h1 className='Welcome-Heading'>Welcome</h1>
            <p className='Welcome-Paragraph'>Thank you! Happy Learning</p>         
            </div>
                <button className='Welcome-Button' onClick = {this.isChange}>
                    {this.state.isSubscribe ? "Subscribe" : "Subscribed"}
                    </button>
            </div>
        )
    }
}
export default Welcome;
