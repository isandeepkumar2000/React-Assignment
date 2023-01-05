import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyleContainer = createGlobalStyle`
body{
    background-image: linear-gradient(#fbc7d4, #9796f0);
    background-repeat: no-repeat;
    height: 100vh;
    padding: 50px 65px;
    font-family: Roboto;
    @media (min-width: 560px) {
      padding: 20px 15px;
  }
  @media (min-width: 560px) {
      padding: 20px 15px;
  }
} 
`
export const AppointmentItems = styled.div`
    margin-top: 69px;
    padding: 62px 16px;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     height: 60vh;
     background-color: white;
     border-radius: 10px;
     @media (min-width: 560px) {
      margin-top: 49px;
    padding: 32px 10px;
  }
  @media (min-width: 560px) {
      margin-top: 49px;
    padding: 32px 10px;
  }
`
export const AppointmentBoxes = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 60%;
`
export const AppointmentImage = styled.img`
@media (max-width: 560px) {
    width: 0px;
  }

`

export const AppointmentBoxButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 58%;
margin: 20px;
`

export const AppointmentButton = styled.button`
margin-top: 20px;
padding: 10px 25px;
background-color:  #8b5cf6;
color: white;
border: none;
font-weight: 700;
border-radius: 10px;
`
export const AppointmentHeading = styled.h1`
font-size: 50px;
font-weight: 700;
letter-spacing: 2px;
@media (min-width: 560px) {
  font-size: 15px;
  letter-spacing: 1px;
  }
`
export const AppointmentTitle = styled.p`
font-size: 20px;
font-weight: 700;
letter-spacing: 1px;
`
export const AppointmentTitleInput = styled.input`
width: 170px;
font-weight: 700;
border-radius: 5px;
height: 25px;
border: 1px solid;
`

export const AppointmentHr = styled.hr`
  color:green;
  width: 60%;
  margin-top: 20px;
`
export const AppointmentItemList = styled.ul`
display: flex;
`
