import {Component} from 'react'

class ButtonMode extends Component {
  state = {
    showMessage: ""
  };
  onButtonClickHandler = (event) => {
this.setState({
    showMessage: event.target.value
})
  };

  render() {
    const {showMessage} = this.state
    return (
      <div className="App">
        <div>
        {showMessage==="1" ?<p>Start</p>:null}
        <button value = "1" onClick={this.onButtonClickHandler} >Start</button>
        </div>
        <div>
        {showMessage ==="2" ? <p>Repair</p>:null}
        <button value = "2" onClick={this.onButtonClickHandler}>Repair</button>
        </div>
        <div>
        {showMessage ==="3" ? <p>Stop</p>:null}
        <button value = "3" onClick={this.onButtonClickHandler}>Stop</button>
        </div>
     
      </div>
    );
  }
}

export default ButtonMode;

