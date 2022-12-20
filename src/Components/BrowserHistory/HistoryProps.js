import './index.css'
const HistoryProps = (props) => {
const {HistoryItems, deleteItems} = props
const {logoUrl,domainUrl,title,timeAccessed,uniquedId} = HistoryItems
const toDelete = () => {
deleteItems (uniquedId)
}
return(
<div className = "History-boxes">
    <div className="History-boxes-items">
        <div className="History-boxes-items-datetime-icons">
            <div className="History-boxes-items-date">
<p className = "timeAccessed" >{timeAccessed}</p>
            </div>
            <div className="History-boxes-items-iconText">
             <img className = "Image" src = {logoUrl} alt="" />   
            <p className = "title" >{title}</p> 
               <p className = "domainUrl" >{domainUrl}</p>
            </div>
        </div>
        <div className="History-boxes-items-deleteIcon">
            <img className = "deleteIcon" src = "https://assets.ccbp.in/frontend/react-js/delete-img.png " alt="" onClick={toDelete}/>
        </div>
    </div>
    
</div>

    )

}
export default HistoryProps