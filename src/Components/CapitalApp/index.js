import React, { Component } from "react";
import './index.css'

export const CapitalList = [
  {
    id: 1,
    CapitalDisplayText: "India",
    country: "New Delhi",
  },

  {
    id: 2,
    CapitalDisplayText: "United KingDom",
    country: "London",
  },
  {
    id: 3,
    CapitalDisplayText: "Paris",
    country: "France",
  },
  {
    id: 4,
    CapitalDisplayText: "Kathmandu",
    country: "Nepal",
  },
  {
    id: 5,
    CapitalDisplayText: "Helsinki",
    country: "FinLAnd",
  },
];



 
class CapitalApp extends Component {

state = {onchangestate: CapitalList[0].id}


  CapitalCountry = () => {
 return CapitalList.map(eachitem => (
<option value = {eachitem.id}>{eachitem.country}</option>
  ))
  };


  stateChange = (event) => {
    this.setState({
        onchangestate: event.target.value
    })

  }
 
  

  render() {
    const {onchangestate} = this.state
    const capitalObj = CapitalList.find(eachitem=>{
        return Number(eachitem.id)=== Number(onchangestate)
    })

    return (
        <div className="CapitalApp">
      <div className="CapitalApp_Conatiner">
        <div className="CapitalApp_Items">
          <h1 className="CapitalApp_heading">Countries And Captials</h1>
          <div><select className="slection_box" onChange={this.stateChange}>{this.CapitalCountry()}</select> is capital of which country</div>
        <p className="Paragraph">{capitalObj.CapitalDisplayText}</p>
        </div>
      </div>
      </div>
    );
  }
}
export default CapitalApp;


