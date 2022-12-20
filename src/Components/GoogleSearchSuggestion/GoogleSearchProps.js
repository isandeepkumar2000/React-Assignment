import './index.css'
const GoogleSearch = (props) => {
const {Searchsuggestionprops,SelectItem} = props
const toSelectarrow = (event) =>{
    SelectItem(event.target.id)
}

return(
    <div className="google_boxes">
        <div className="GoogleSuggList">
        {Searchsuggestionprops.Suggestion}
        <img className="arrow-logo" id =  {Searchsuggestionprops.Suggestion} src = "https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png " alt="arrow" onClick={toSelectarrow}  />
        </div>
    </div>
)
}
export default GoogleSearch;