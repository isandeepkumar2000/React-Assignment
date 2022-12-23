const AppointmentItem = (props) => {
  const { AppointmentProp ,isShared} = props;
  const { Title, Dates, id, isChecked } = AppointmentProp;

  const starImgUrl = isChecked
    ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
    : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png";

  const onClickSharedIcon = () => {
    isShared(id);
  };

  return (
    <div className="LowerList">
      <div className="LowerList-join">
        <div className="LowerList_title">
          <p className="LowerList_Title">{Title}</p>
        </div>
        <div
          className="LowerList_Images"
          type="button"
          onClick={onClickSharedIcon}
        >
          <img src={starImgUrl} alt="ichecked" />
        </div>
      </div>

      <div className="LowerList_Date">
        <p className="LowerList_DateShown">{Dates}</p>
      </div>
    </div>
  );
};
export default AppointmentItem;