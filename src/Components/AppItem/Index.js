const AppItem = (props) => {
    const{latestCatagrest} = props
    const {appId,appName,imageUrl} = latestCatagrest

return(
<div className="AppItems_Container">
    <div className="AppItems_items">
        <img src = {imageUrl} alt = {`games ${appId}`} />
        <p className="AppItems_Paragrph">{appName}</p>
    </div>
</div>
)



}
export default AppItem