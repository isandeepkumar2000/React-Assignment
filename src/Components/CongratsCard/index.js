import './index.css'
function CongratsCard() {
  return (
   <div className = "Congrates-Conatiner">
   <div className = "Congrates-Box">
    <div className =
     "Congrates-Heading">
      <h1 className = "Heading">Congratulations</h1>
    </div>
    <div className = "Congrates-items">
    <img src= "https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" className="Congrates-ManPhoto" alt="logo" />
    <h1 className = "Congrats-titleName">Kiran V</h1>
    <p className = "Congrats-Biotitle">Lovely Professional University Of Computer Science <span>Punjab</span> </p>
    <img src= "https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="Congrates-WatchPhoto" alt="logo" />
    </div>
   </div>

   </div>
  );
}

export default CongratsCard;
