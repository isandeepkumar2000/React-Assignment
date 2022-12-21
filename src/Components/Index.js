import React, { Component } from "react";
import "./Index.css";

const ImageCoin = [
  {
    id:1,
    ImageUrl: "https://assets.ccbp.in/frontend/react-js/heads-img.png",
  },
  {
    id:2,
    ImageUrl: "https://assets.ccbp.in/frontend/react-js/tails-img.png",
  },
];

class CoinTossed extends Component {
  state = { ResultCoinDisplay: "https://assets.ccbp.in/frontend/react-js/heads-img.png", HeadsCoin: 0, TailsCoins: 0 };

  ChangeCoinImage = () => {
    const tossResult = Math.floor(Math.random()*2)
    console.log(tossResult,"onclick")
    this.setState({
          ResultCoinDisplay:ImageCoin[tossResult].ImageUrl
       
        }
        )
     this.rondomHead(tossResult)
     this.RomdomTails(tossResult)
  }

  rondomHead = (tossResult) => {
  
    if(tossResult === 0){
    this.setState((prevState) =>{
return {HeadsCoin: prevState.HeadsCoin + 1}
    })
}
  }
  RomdomTails = (tossResult) => {

    if(tossResult === 1){
    this.setState((prevState) =>{
return {TailsCoins: prevState.TailsCoins + 1}
    })
}
  }

  
  render() {
    const {ResultCoinDisplay,HeadsCoin,TailsCoins} = this.state
    console.log(HeadsCoin)
    const Totals = HeadsCoin + TailsCoins
    return <div className="Coin_Container">
<div className="Coin_items">
    <div className="Coin_header">
    <h1 className="Coin_Heading">Coin Toss Game</h1>
    <p className="Coin_Paragraph">Heads (or) Tails</p>
    </div>
    <div className="Coin_image">
        <img src = {ResultCoinDisplay} alt = "Coin_image"/>
    </div>
<div className="Coin_Button">
    <button type = "button" className="Button" onClick={this.ChangeCoinImage}>Toss Coin  
    </button>
</div>
<div className="Coin_Result_Heads_Tails">
    <p className="Total"> Total {Totals}</p>
    <p className="Heads"> Heads {HeadsCoin} {this.rondomHead}</p>
    <p className="Tails">Tails  {TailsCoins} {this.RomdomTails}</p>
</div>
</div>
    </div>;
  }
}

export default CoinTossed;
