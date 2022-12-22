const CommentsItems = (props) => {
  const { CommentsDetails, toggleISLike, deleteComment } = props;
  const { id, Name, Comments, isLike, initialClassName } = CommentsDetails;
  const initial = Name ? Name[0].toUpperCase() : "";

  const starImgUrl = isLike
    ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
    : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";

  const onClickLikeIcon = () => {
    toggleISLike(id);
  };

  const isDelete = () => {
    deleteComment(id);
  };

  return (
    <li className="table-row">
      <div className="Comment-Area">
        <div className="Join">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div className="table-cell name-column">
          <p className="Name_box">{Name}</p>
          <div>
          <p className="Comment-no-value">{Comments}</p>
          </div>
          </div>
          </div>
          <div className="Button-join">
          <div
            type="button"
            className="favorite-icon-container"
            onClick={onClickLikeIcon}
          >
            <img src={starImgUrl} className="favorite-icon" alt="star" />
          </div>
          <button className="SimpleTodo-Button" onClick={isDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="DeleteComment"
            />
          </button>
       </div>
      </div>
       
      <hr className="Hr-main"></hr>
    </li>
  );
};
export default CommentsItems;
