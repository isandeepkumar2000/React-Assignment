import React, { Component } from "react";
import AppointmentItem from "../AppointmentItem/Index";
import { v4 as uuidv4 } from "uuid";
import {format} from 'date-fns'

class Appointment extends Component {
  state = { Title: "", Date: "", AppointmentList: [] };


  isShared = (id) => {
    this.setState(prevState => ({
      AppointmentList: prevState.AppointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isChecked: !eachAppointment.isChecked}
        }
        return eachAppointment
      }),
    }))
  };

  onSubmitButton = (event) => {
    event.preventDefault();
    const {Title, Date} = this.state;
     const formattedDate = Date
      ? format(new Date(Date), 'dd MMMM yyyy, EEEE')
      : ''
    const newAppointment = {
      id: uuidv4(),
      Title: Title,
      Date:formattedDate,
      isChecked: false,
    };
    this.setState((prevstate) => ({
      AppointmentList: [...prevstate.AppointmentList, newAppointment],
      Date: "",
      Title: "",
    }));
  };


  titleName = (event) => {
    this.setState({
      Title: event.target.value,
    });
  };

  selectDate = (event) => {
    this.setState({
      Date: event.target.value,
    });
  };

  render() {
    const {Title, Date, AppointmentList } = this.state;

    return (
      <div className="Appointment_Container">
        <div className="Appointment_Items">
          <h1 className="Appointment_Heading">Add Appointment</h1>
          <div className="Appointment_join">
            <div className="Appointment_items_box">
              <form className="Appointment_form" onClick={this.onSubmitButton}>
                <div>
                  <p className="Appointment_Paragraph">TITLE</p>
                  <input
                    value={Title}
                    type="text"
                    className="Name_input"
                    placeholder="Title"
                    onChange={this.titleName}
                  />
                </div>
                <div>
                  <p className="Appointment_Date">DATE</p>
                  <input
                    value={Date}
                    type="date"
                    className="DatePicker"
                    onChange={this.selectDate}
                  />
                </div>
                <div>
                  <button type="submit" className="Appointment_button">
                    ADD
                  </button>
                </div>
              </form>
            </div>
            <div className="Images_Appoinmtnent"></div>
          </div>
          <hr className="Appointment_Details" />
          <div className="Appointment_Details_Box">
            {AppointmentList.map((eachAppointment) => {
              return (
                <AppointmentItem
                  AppointmentProp={eachAppointment}
                  isShared={this.isShared}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
