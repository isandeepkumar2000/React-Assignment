import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyleContainer = createGlobalStyle`
body{
    background-image: linear-gradient(#fbc7d4, #9796f0);
    background-repeat: no-repeat;
    height: 100vh;
    padding: 10px 15px;
} 
`
export const AppointmentItems = styled.div`
 margin-top: 100px;
     padding: 10px 15px;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     height: 60vh;
     background-color: white;
`
export const AppointmentBoxes = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`