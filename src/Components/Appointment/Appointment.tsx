import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid"
import { format } from 'date-fns'
import { AppointmentItem } from '../AppointmentItem/AppointmentItem'
import {  AppointmentBoxButton,
    AppointmentBoxes,
     AppointmentButton, 
     AppointmentHeading,
      AppointmentHr,
       AppointmentImage, 
       AppointmentItemList, 
       AppointmentItems, 
       AppointmentTitle, 
       AppointmentTitleInput,
        GlobalStyleContainer 
    } from './styleComponents'


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
                    <AppointmentBoxes >
                        <div className='Appointment-title-date'>
                            <AppointmentHeading >Add Appointment</AppointmentHeading>
                            <form onSubmit={this.onSubmitButton}>
                                <AppointmentTitle>TITLE</AppointmentTitle>
                                <AppointmentTitleInput value={Title} type="text" placeholder='Title' onChange={this.titleName} />
                                <AppointmentTitle >DATE</AppointmentTitle>
                                <AppointmentTitleInput value={Dates} type='date'  onChange={this.selectDate} />
                                <div>
                                    <AppointmentButton>Add</AppointmentButton>
                                </div>
                            </form>
                        </div>
                        <div className='Appointment_image'>
                            <AppointmentImage src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt=" appointments" />
                        </div>
                    </AppointmentBoxes>
                    <AppointmentHr  />
                    <AppointmentBoxButton>
                        <AppointmentTitle>Appointment</AppointmentTitle>
                        <div>
                            <AppointmentButton onClick={this.onFilter}>  {FilterSharedButton}</AppointmentButton>
                        </div>
                    </AppointmentBoxButton>
                    <AppointmentItemList >{this.renderAppointmentsList()}</AppointmentItemList>
            </AppointmentItems>
            </div>
        )
    }
}
export default Appointment