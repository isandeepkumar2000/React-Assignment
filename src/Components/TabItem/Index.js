import './Index.css'


const TabItem = (props)  => {
    const {tabDetails,clickTabItem} = props
    const {tabId,displayText} = tabDetails
    const onChangeTabitems = () => {
        clickTabItem(tabId)
        console.log(tabId)
    }


    return(
    
    <li className="Tab_list">
        <button type="button" className="button-items" onClick={onChangeTabitems}>
          {displayText}
        </button>
    </li>
    
    
    )
    
    }
    export default TabItem