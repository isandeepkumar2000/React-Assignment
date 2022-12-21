import React, { Component } from "react";
import "./Index.css";

const reviewsData = [
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png",
    username: "Sherry Johnson",
    companyName: "MedX",
    description:
      "I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png",
    username: "Ronald Jones",
    companyName: "Infinos Tech",
    description:
      "I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/wade-warren-img.png",
    username: "Wade Warren",
    companyName: "Rang",
    description:
      "The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png",
    username: "Adrian Williams",
    companyName: "WheelO",
    description:
      "Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png",
    username: "Sherry Johnson",
    companyName: "MedX",
    description:
      "I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png",
    username: "Adrian Williams",
    companyName: "WheelO",
    description:
      "Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png",
    username: "Sherry Johnson",
    companyName: "MedX",
    description:
      "I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png",
    username: "Ronald Jones",
    companyName: "Infinos Tech",
    description:
      "I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/wade-warren-img.png",
    username: "Wade Warren",
    companyName: "Rang",
    description:
      "The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png",
    username: "Adrian Williams",
    companyName: "WheelO",
    description:
      "Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png",
    username: "Sherry Johnson",
    companyName: "MedX",
    description:
      "I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.",
  },
  {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png",
    username: "Ronald Jones",
    companyName: "Infinos Tech",
    description:
      "I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.",
  },
];

class ReviewApp extends Component {
  state = { ischecked: 0 };

  rightarrow = () => {
    const { ischecked } = this.state;
    if (ischecked < reviewsData.length - 1) {
      this.setState((prevState) => ({ ischecked: prevState.ischecked + 1}));
    }
  };

  leftarrow = () => {
    const { ischecked } = this.state;
    if (ischecked > 0) {
      this.setState((prevState) => ({ ischecked: prevState.ischecked - 1 }));
    }
  };

  renderReviewList = (review) => {
    const { imgUrl, username, companyName, description } = review;
    return (
     
        <div className="list-container">
          <img src={imgUrl} alt="imes" className="Images" />
          <p className="paraUsername">{username}</p>
          <p className="paraCompanyName">{companyName}</p>
          <p className="paraDescribtion">{description}</p>
        </div>
   
    );
  };

  render() {
    const { ischecked } = this.state;
    const currentReviewDisplay = reviewsData[ischecked];
    return (
      <div className="ReviewApp_Container">
        <div className="ReviewApp_items">
        <h1 className="ReviewApp_Heading">Review</h1>
          <div className="ReviewApp_box">

            <div
              className="Right_arrow"
              type="button"
              onClick={this.leftarrow}
              
            >
              <img className="Images_arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </div>
            <div className="box">
            {this.renderReviewList(currentReviewDisplay)}
            </div>
            <div
              className="Left_arrow"
              type="button"
              onClick={this.rightarrow}
            >
              <img className="Images_arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="left arrow"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ReviewApp;
