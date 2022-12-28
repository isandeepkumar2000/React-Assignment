import React, { Component } from "react";
import './Index.css'

class DigialTimerApp extends Component {
  state = {
    currentRunningSeconds: 0,
    TimeLimit: 25,
    isTimeRunning: false,
  };

  componentDidMount() {
    this.clearTime();
  }

  clearTime = () => {
    clearInterval(this.intervalId);
  };

  decreseTimeLimit = () => {
    const { TimeLimit } = this.state;
    if (TimeLimit > 1) {
      this.setState((prevState) => ({ TimeLimit: prevState.TimeLimit - 1 }));
    }
  };

  increaseTimeLimit = () => {
    this.setState((prevState) => ({ TimeLimit: prevState.TimeLimit + 1 }));
  };

  ResetButton = () => {
    this.setState({
      currentRunningSeconds: 0,
      TimeLimit: 25,
      isTimeRunning: false,
    });
    this.clearTime();
  };

  startTimerCountDown = () => {
    const { currentRunningSeconds, TimeLimit } = this.state;
    const isTimeCompleted = currentRunningSeconds === TimeLimit * 60;
    if (isTimeCompleted) {
      this.setState({ isTimeCompleted: false, currentRunningSeconds: 0 });
      this.clearTime();
    } else {
      this.setState((prevState) => ({
        currentRunningSeconds: prevState.currentRunningSeconds + 1,
      }));
    }
  };

  startOrStopTimer = () => {
    const { isTimeRunning, currentRunningSeconds, TimeLimit } = this.state;
    this.setState((prevState) => ({ isTimeRunning: !prevState.isTimeRunning }));
    const isTimeCompleted = currentRunningSeconds === TimeLimit * 60;
    
    if (isTimeCompleted) {
        this.clearTime();
        this.setState({ isTimeCompleted: false });
    }
    if (isTimeRunning) {
        this.clearTime();
      this.setState({ isTimeRunning: false });
    } else {
      this.intervalId = setInterval(() => {
        this.startTimerCountDown();
      }, 1000);
    }
  };

  displayIconsOrTmage = () => {
    const { isTimeRunning } = this.state;
    const PlayIconImage =
      "https://assets.ccbp.in/frontend/react-js/play-icon-img.png";
    const PauseIconImage =
      "https://assets.ccbp.in/frontend/react-js/pause-icon-img.png";
    const ResetIconImage =
      "https://assets.ccbp.in/frontend/react-js/reset-icon-img.png";

    const PlayAndPause = isTimeRunning ? PauseIconImage : PlayIconImage;
    const PlayAndPauseAlt = isTimeRunning ? "Play Icon" : "Pause Icon";
    const PlayAndPauseName = isTimeRunning ? "Play" : "Pause";

    return (
      <div className="displayIconsOrTmage_Conatiner">
        <div className="displayIconsOrTmage_items">
          <div className="displayIconsOrTmage_PlayorPause">
            <button className="PauseOrPlay" onClick={this.startOrStopTimer}>
              <img
                className="PlayOrPauseButton"
                src={PlayAndPause}
                alt={PlayAndPauseAlt}
              />
              <h1 className="PlayorPauseName">{PlayAndPauseName}</h1>
            </button>
          </div>

          <div className="displayIconsOrTmage_Reset">
            <button className="ResetButton" onClick={this.ResetButton}>
              <img src={ResetIconImage} alt={PlayAndPauseAlt} />
              <h1 className="ResetButton_Heading">Reset</h1>
            </button>
          </div>
        </div>
      </div>
    );
  };

  setRecordTime = () => {
    const { TimeLimit, currentRunningSeconds } = this.state;
    const isButtonDisabled = currentRunningSeconds > 0;

    return (
      <div className="setRecordTime_Container">
        <div className="setRecordTime_items">
          <div className="setRecordTime_Para">
            setRecordTime{" "}
            <p className="setRecordTime_Paragraph">Set Time Limit</p>
          </div>
          <div className="Button_resert">
            <div className="Negative">
              <button
                className="Negative_button"
                disabled={isButtonDisabled}
                onClick={this.decreseTimeLimit}
              >
                <p className="Neagtive_symbol">-</p>
              </button>
            </div>
            <div className="Timer_display">
              <p className="setRecordTime_DisplayTime">{TimeLimit}</p>
            </div>
            <div className="Positive">
              <button
                className="Positive_button"
                disabled={isButtonDisabled}
                onClick={this.increaseTimeLimit}
              >
                <p className="Neagtive_symbol">+</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  changingClocktimer = () => {
    const { TimeLimit, currentRunningSeconds } = this.state;
    const timeInSeconds = TimeLimit * 60 - currentRunningSeconds;
    const minutes = Math.floor(timeInSeconds / 60);
    const second = Math.floor(timeInSeconds % 60);
    const Mintuestimer = minutes > 9 ? minutes : `0${minutes}`;
    const secondtimer = second > 9 ? second : `0${second}`;
    return `${Mintuestimer} : ${secondtimer}`;
  };

  render() {
    const { isTimeRunning } = this.state;
    const timerStatusText = isTimeRunning ? "Running" : "Paused";
    return (
      <div className="DigialTimerApp_Conatiner">
        <div className="DigialTimerApp_items">
          <div>
            <h1 className="DigialTimerApp_Heading">Digital Timer</h1>
          </div>
          <div className="DigialTimerApp_join">
            <h1 className="changingTimerCount">{this.changingClocktimer()}</h1>
            <p className="ChangingTextOfRuningorPause">{timerStatusText}</p>
          </div>

          <div className="">
            <div>{this.displayIconsOrTmage()}</div>
            <div>{this.setRecordTime()}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default DigialTimerApp;
