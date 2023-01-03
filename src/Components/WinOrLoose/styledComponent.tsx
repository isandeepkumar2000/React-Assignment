
import styled, { createGlobalStyle } from 'styled-components'

export const WinOrLooseCard = styled.div`
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff33;
    width: 85%;
    border: 3px solid #ffffff30;
    border-radius: 24px;
    margin: auto;
    padding: 16px;
    @media screen and (min-width: 768px) {
      width: 80%;
      padding: 32px;
  }
  @media screen and (min-width: 992px) { 
      flex-direction: row;
      width: 70%; 
  }
  
  @media screen and (min-width: 1200px) {
      width: 40%;  
  } 
`
export const DetailsSection = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 1;
    @media screen and (min-width: 992px) { 
  order: 0;
}
`
export const GameStatus = styled.h1`
   color: #ffffff;
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: bold;

  @media screen and (min-width: 992px) {
      font-size: 64px;
  }
`
export const CurrentScoreLevel = styled.p`
   text-align: center;
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: bold;
    margin: 0px;
    @media screen and (min-width: 992px) {
      font-size: 36px;
  }
`
export const CurrentScrorevalue = styled.p`
  text-align: center;
    color: #6a59ff;
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: bold;
    margin: 0px;
    @media screen and (min-width: 768px) {
      font-size: 48px;
  }
`
export const Button = styled.button`
   color: #ffffff;
   color: #3d3d3d;
    background-color: #ffce27;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    margin: 16px;
    padding: 16px;
    padding-right: 24px;
    padding-left: 24px;
    cursor: pointer;
    outline: none;
`
export const ImageSection = styled.div`
   display: flex;
    justify-content: center;
    order: 0;
    @media screen and (min-width: 992px) {
      order: 1;
  }
`
export const WinAndLooseImage = styled.img`
 width: 150px;
    height: 200px;
    @media screen and (min-width: 992px) {
    width: 350px;
    height: 450px;
  
}
`
