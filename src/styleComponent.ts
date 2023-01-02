import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
    background-color: #ffc2a0;
    padding: 20px 230px;
    font-family: Roboto;
    display: flex;
justify-content: center;
align-items: center;
height: 80vh;
flex-direction: column;
}
`
export const HeadingStyle = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 5px 309px;
    margin-top: 40px;
    @media (max-width: 310px) {
        padding: 3px 48px;
  }
`
export const Centerstyle = styled.div`

`

export const Paragraph = styled.p`
font-size: 20px;
margin-right: 20px;
`
export const Heading = styled.h1`
font-size: 60px;
font-weight: 700;
color: #ff8542;
margin-left: 20px

`
export const DeleteButton = styled.button`

    padding: 10px 15px;
    border: 1px solid #ff0b37;
    color: #ff0b37;
    background-color: white;
    font-weight: 700;
border-radius: 10px;
`

export const JoinFlex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`