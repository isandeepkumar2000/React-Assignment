import { Component } from "react";
import GoogleSuggestionArrayList from "./GoogleSuggestionList/GoogleSuggestionList";
import "./index.css";
import GoogleSearch from "./GoogleSearchProps";

class GoogleSuggestionBox extends Component {
  state = {
    searchInput: "",
  };

  Selectarrow = (valjjjue) => {
    this.setState({
      searchInput: valjjjue,
    });
  };

  onChangeSearch = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { searchInput } = this.state;
    const filterSearchInput = GoogleSuggestionArrayList.filter((eachitem) => {
      return eachitem.Suggestion.toLowerCase().includes(
        searchInput.toLowerCase()
      );
    });

    return (
      <div className="GoogleSuggestion_Conatiner">
        <div className="GoogleSuggestion_Items">
          <img
            className="google_logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt=""
          />

          <div className="GoogleSuggestion_Box">
            <input
              className="SearchInput"
              type="search"
              placeholder="Google Search"
              value={searchInput}
              onChange={this.onChangeSearch}
            />
            {filterSearchInput.map((eachitem) => {
              return (
                <div>
                  <GoogleSearch
                    Searchsuggestionprops={eachitem}
                    SelectItem={this.Selectarrow}
                  />
                </div>
              );
            })}
            {/* {filterSearchInput.length === 0 ? <h2>There is no such thing in the list</h2> : ''} */}
          </div>
        </div>
      </div>
    );
  }
}
export default GoogleSuggestionBox;
