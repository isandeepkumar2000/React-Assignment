import React, { Component } from "react";
import CommentsItems from "../CommentsItems/Index";
import { v4 as uuidv4 } from "uuid";
import './Index.css'
const CommentArrayList = [
  {
    id: uuidv4(),
    Name: "Sandeep Kumar",
    Comments: "Thanks for beings so supportive and such a good friend",
    isLike: false,
  },
];

class Comments extends Component {
  state = { CommentList: CommentArrayList, Name: "", Comments: "" };

  toggleISLike = (id) => {
    this.setState((prevState) => ({
      CommentList: prevState.CommentList.map((eachComment) => {
        if (id === eachComment.id) {
          return { ...eachComment, isLike: !eachComment.isLike };
        }
        return eachComment;
      }),
    }));
  };

  AddComments = (event) => {
    event.preventDefault();
    const { Name, Comments } = this.state;
    const newComment = {
      id: uuidv4(),
      Name,
      Comments,
      isLike: false,
      initialClassName: "",
    };
    this.setState((prevState) => ({
      CommentList: [...prevState.CommentList, newComment],
      Name: "",
      Comments: "",
    }));
  };

  deleteComment = (id) => {
    const { CommentList } = this.state;
    const filterAterDeleteList = CommentList.filter(
      (eachDeleteitem) => eachDeleteitem.id !== id
    );
    this.setState({
      CommentList: filterAterDeleteList,
    });
  };

  ChangeName = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };

  ChangeComment = (event) => {
    this.setState({
      Comments: event.target.value,
    });
  };

  render() {
    const { CommentList, Name, Comments } = this.state;
    return (
      <div className="Comment_Container">
        <div className="Comments_items">
          <h1 className="Comments_Heading">Comments</h1>
          <div className="Comments-para-name-comment-buton">
          <p className="Comments_Paragraph">
            Say Something About 4.0 Technologies
          </p>
          <form className="Comments_form_Container" onSubmit={this.AddComments}>
          <div>
            <input
              value={Name}
              onChange={this.ChangeName}
              className="Name_input"
              placeholder="Name"
            />
            </div>
            <div>
            <textarea
              value={Comments}
              onChange={this.ChangeComment}
              className="Comments_input"
              placeholder="Write_Comments"
            />
            </div>
            <button type="submit" className="AddComments_SubmitButton">
              Add Comments
            </button>
          </form>
         
          <hr className="Hr-main"></hr>
          </div>
          <p className="heading">
            <span className="comments-count">{CommentList.length}</span>
            <span>Comments</span>
          </p>
          <ul className="Comment_table">
            <li className="Comment_items">
              {CommentList.map((eachComments) => (
                <CommentsItems
                  CommentsDetails={eachComments}
                  toggleISLike={this.toggleISLike}
                  deleteComment={this.deleteComment}
                />
              ))}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Comments;
