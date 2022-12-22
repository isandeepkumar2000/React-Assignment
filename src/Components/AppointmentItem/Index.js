

const AppointmentItem = (props) => {
    const {AppointmentProp} = props
    const {Title,Date,id, isShared,isChecked} = AppointmentProp

    const starImgUrl = isChecked
    ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
    : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";

   const onClickLikeIcon = () => {
        isShared(id)
    }

    return(
<div className="LowerList">
    <div className="LowerList-join">
        <div className="LowerList_title">
            <p className="LowerList_Title">{Title}</p>
        </div>

        <div className="LowerList_Images"     type="button"
            
            onClick={onClickLikeIcon}>
    
<img src= {starImgUrl} alt = "ichecked" />
        </div>
    </div>

    <div className="LowerList_Date">
        <p className="LowerList_DateShown">{Date}</p>
    </div>

</div>
    )
}
export default AppointmentItem