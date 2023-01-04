import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid"
import { format } from 'date-fns'
import { AppointmentItem } from '../AppointmentItem/AppointmentItem'
import {  AppointmentBoxes, AppointmentItems, GlobalStyleContainer } from './styleComponents'


export type MyState = {
    Dates: string
    Title: string
    AppointmentList: AppointmentObject[]
    isChecked: boolean
}

export type AppointmentObject = {
    Dates: string
    Title: string
    uniqueId: string
    isChecked: boolean

}

class Appointment extends Component {
    state: MyState = { Dates: "", Title: "", AppointmentList: [], isChecked: false }

    onSubmitButton = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { Title, Dates } = this.state
        const formattedDate = Dates
            ? format(new Date(Dates), "dd MMMM yyyy, EEEE")
            : "";
        const newAppointment = {
            Dates: formattedDate,
            Title,
            uniqueId: uuidv4(),
            isChecked: false,
        }
        this.setState((prevState: MyState) => ({
            AppointmentList: [...prevState.AppointmentList, newAppointment],
            Dates: "",
            Title: "",
        }));
    }

    onFilter = () => {
        const { isChecked } = this.state;
        this.setState({ isChecked: !isChecked });
    };

    renderAppointmentsList = () => {
        const AppointmentList = this.getAppointmentList();
        return AppointmentList.map((eachAppointments) => (
            <AppointmentItem
                key={eachAppointments.uniqueId}
                AppointmentProp={eachAppointments}
                isShared={this.isShared}
            />
        ));
    }

    getAppointmentList = () => {
        const { AppointmentList, isChecked } = this.state;

        if (isChecked) {
            return AppointmentList.filter(
                (eachTransaction) => eachTransaction.isChecked === true
            );
        }
        return AppointmentList;
    };

    isShared = (uniqueId: string) => {
        this.setState((prevState: MyState) => ({
            AppointmentList: prevState.AppointmentList.map((eachAppointment) => {
                if (uniqueId === eachAppointment.uniqueId) {
                    return { ...eachAppointment, isChecked: !eachAppointment.isChecked };
                }
                return eachAppointment;
            }),
        }));
    };

    titleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            Title: e.target.value,
        });
    };

    selectDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            Dates: e.target.value,
        });
    };

    render() {
        const { Title, Dates, isChecked } = this.state;
        const FilterSharedButton = isChecked
            ? 'Not Done'
            : 'Done'

        return (
            <div className='Appointment-Container'>
                <GlobalStyleContainer/>
                <AppointmentItems >

                    <AppointmentBoxes className='Appointment-boxes'>
                        <div className='Appointment-title-date'>
                            <h1 className='Appointment_heading'>Add Appointment</h1>
                            <form onSubmit={this.onSubmitButton}>
                                <p className='Appointment-title-paragraph'>TITLE</p>
                                <input value={Title} type="text" className='Appointment-title-bar' placeholder='Title' onChange={this.titleName} />
                                <p className='Appointment-Date-Selector'>DATE</p>
                                <input value={Dates} type='date' className="Appointment-Date-Bar" onChange={this.selectDate} />
                                <div>
                                    <button type='submit' className='Appointment-Button'>Add</button>
                                </div>
                            </form>
                        </div>
                        <div className='Appointment_image'>
                            <img className="appointment_image" src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt=" appointments" />
                        </div>
                    </AppointmentBoxes>
                    <hr className='Appointment-Hr' />
                    <AppointmentBoxes>
                        <div>Appointment</div>
                        <div>
                            <button onClick={this.onFilter}>  {FilterSharedButton}</button>
                        </div>

                    </AppointmentBoxes>
                    <ul className="appointments-list">{this.renderAppointmentsList()}</ul>
               
            </AppointmentItems>
            </div>
        )
    }
}
export default Appointment