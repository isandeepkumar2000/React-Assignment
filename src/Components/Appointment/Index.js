import React, { Component } from "react"
import AppointmentItem from "../AppointmentItem/Index"
import { v4 as uuidv4 } from "uuid"
import{format} from 'date-fns'

import './Index.css'
class Appointment extends Component {
  state = { Title: "", Dates: "", AppointmentList: [] };

  onSubmitButton = (event) => {
    event.preventDefault();
    const {Title, Dates} = this.state;
     const formattedDate = Dates
      ? format(new Date(Dates), "dd MMMM yyyy, EEEE")
      : "";
    const newAppointment = {
      id: uuidv4(),
      Title,
      Dates: formattedDate,
      isChecked: false,
    };
    this.setState((prevstate) => ({
      AppointmentList: [...prevstate.AppointmentList, newAppointment],
      Dates: "",
      Title: "",
    }));
  };
  
    onFilter = () => {
    const { isChecked } = this.state;

    this.setState({ isChecked: !isChecked });
  };
  
  
  renderAppointmentsList = () => {
    const AppointmentList = this.getAppointmentList();

    return AppointmentList.map((eachAppointment) => (
      <AppointmentItem
        key={eachAppointment.id}
        AppointmentProp={eachAppointment}
        isShared={this.isShared}
      />
    ));
  };
 
  getAppointmentList = () => {
    const { AppointmentList, isChecked } = this.state;

    if (isChecked) {
      return AppointmentList.filter(
        (eachTransaction) => eachTransaction.isChecked === true
      );
    }
    return AppointmentList;
  };

  isShared = (id) => {
  this.setState((prevState) => ({
    AppointmentList: prevState.AppointmentList.map((eachAppointment) => {
        if (id === eachAppointment.id) {
          return { ...eachAppointment, isChecked: !eachAppointment.isChecked };
        }
        return eachAppointment;
      }),
    }));
  };

  titleName = (event) => {
    this.setState({
      Title: event.target.value,
    });
  };

  selectDate = (event) => {
    this.setState({
      Dates: event.target.value,
    });
  };

  render() {
    const {Title, Dates, isChecked } = this.state;
const filterSteredBtn = isChecked
  ? 'filter-active-bg'
      : 'filter-inactive-bg'
    return (
      <div className="Appointment_Container">
        <div className="Appointment_Items">
          <h1 className="Appointment_Heading">Add Appointment</h1>
          <div className="Appointment_join">
            <div className="Appointment_items_box">
              <form className="Appointment_form" onSubmit={this.onSubmitButton}>
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
                    value={Dates}
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
        <div className="header-filter-container">
            <h1 className="appointment-heading">Appointments</h1>
            <button
              className={`starred-btn ${filterSteredBtn}`}
              onClick={this.onFilter}
              type="button"
            >
              Starred
            </button>
          </div>
          <ul className="appointments-list">{this.renderAppointmentsList()}</ul>
        </div>
      </div>
    );
  }
}

export default Appointment;
