import React, { Component } from "react";
import DestinationArrayList from "./DestinationList";
import "./index.css";

class Destination extends Component {
  state = {
    SearchInput: "",
  };
  onChangeSearchInput = (event) => {
    this.setState({
      SearchInput: event.target.value,
    });
  };

  render() {
    const { SearchInput } = this.state;
    const SearchInputResult = DestinationArrayList.filter((eachitem) =>
      eachitem.Name.toLowerCase().includes(SearchInput.toLowerCase())
    );
    return (
      <div className="Destination-Container">
        <div className="Destination-items">
          <h1 className="Destination-Headng">Destination Search</h1>
          <div className="Destination-Box">
            <input
              type="search"
              value={SearchInput}
              className="Destination-search"
              placeholder="Please Write Name!!"
              onChange={this.onChangeSearchInput}
            />
          </div>
          <div className="Destination-objects">
            {SearchInputResult.map((eachitem) => {
              return (
                <section className="DestinationBox-items">
                  <img className="Images" src={eachitem.ImageUrl} alt="" />
                  <p className="Name">{eachitem.Name}</p>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Destination;
