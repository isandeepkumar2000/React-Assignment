import './Index.css'


const TabItem = (props)  => {
    const {tabDetails,clickTabItem} = props
    const {tabId,displayText} = tabDetails
    const onChangeTabitems = () => {
        clickTabItem(tabId)
      
    }


    return(
      
    <li className="Tab_list">
       
        <div type="button" className="button-items" onClick={onChangeTabitems}>
          {displayText}
        </div>
    </li>
    
    
    )
    
    }
    export default TabItem