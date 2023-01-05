import React from "react"
import { AppointmentObject } from "../Appointment/Appointment"
import { AppointmentItemJoin, AppointmentItemJoinSection } from "./styleComponents"

interface AppointmentItemProp {
  AppointmentProp: AppointmentObject
 isShared: (uniqueId: string) => void
}


export const AppointmentItem: React.FC<AppointmentItemProp> = (props) => {
  
  const {AppointmentProp, isShared} = props
  const {Title, Dates, uniqueId, isChecked} = AppointmentProp


  const starImgUrl = isChecked
  ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
  : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png";
  
  const onClickSharedIcon = () => {
    isShared(uniqueId)
  }

  return (
    <div className="AppointmentItem-Container">
      <AppointmentItemJoin >
        <AppointmentItemJoinSection>
          <div>
            <p>{Title}</p>
            <p>{Dates}</p>
          </div>
          <div>
          <button onClick = {onClickSharedIcon}>  <img src= {starImgUrl} alt="isChecked"/></button> 
          </div>
        </AppointmentItemJoinSection>
      </AppointmentItemJoin>
    </div>
  )
}