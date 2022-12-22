import React, { Component } from 'react'
import AppointmentItem from '../AppointmentItem/Index'


class Appointment extends Component {
  render() {
    return (
      <div className='Appointment_Container'>
        <div className='Appointment_Items'>
            <h1 className='Appointment_Heading'>Add Appointment</h1>
            <div className='Appointment_join'>
                <div className='Appointment_items_box'>
                    <div>
                        <p>TITLE</p>
                        <input className="Name_input" placeholder="Title" />
                    </div>
                    <div>
                        <p>DATE</p>
                        
                    </div>

                </div>
                <div className='Images_Appoinmtnent'></div>
            </div>
        </div>

      </div>
    )
  }
}

export default Appointment