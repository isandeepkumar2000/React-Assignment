import { Component } from "react";
import "./index.css";

class EvenOdd extends Component {
  state = { Count: 0 };

  CountNumEvenOdd = () => {
    this.setState((prevstate) => ({
      Count: Math.floor(Math.random() * 200 + 1),
    }));
  };

checkEvenOdd = () => {
  const { Count } = this.state;
  if(Count % 2 === 0){
    return "Even"
  }
  return "Odd"
}

  render() {
    const { Count } = this.state;
    return (
      <div className="EvenOdd-Container">
        <div className="EvenOdd-items">
          <p className="EvenOdd-Paragraph-Result-Count">Count {Count} </p>
          <p className="EvenOdd-Paragraph-EvenOdd">
            Count is <span>{this.checkEvenOdd()}</span>
          </p>
          
          <div className="EvenOdd-button">
            <button className="button" onClick={this.CountNumEvenOdd}>
              Increment
            </button>
          </div>
          <p className="EvenOdd-Intro-Paragrpah">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    );
  }
}
export default EvenOdd;
