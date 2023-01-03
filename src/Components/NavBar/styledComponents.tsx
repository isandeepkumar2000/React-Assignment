
import styled, { createGlobalStyle } from 'styled-components'

export const NavBarContainer = styled.nav`
    display: flex;
    justify-content: center;
    background-color: #ffffff33;
    padding: 8px;
   
  `

export const TitleWithScoreConatiner = styled.div`
 display: flex;
    justify-content: space-between;
    flex-basis: 80%;
    max-width: 1000px;

`
export const LogoAndTitleContainer = styled.div`
    display: flex;
    align-items: center;
   
  `
export const EmojiLogo = styled.img`
width: 24px;
@media screen and (min-width: 768px) {
 
      width: 48px;
    
  }
 
`
export const Title = styled.h1`
     color: #ffffff;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: bold;
    @media screen and (min-width: 768px) {

      font-size: 24px;
    
  }
   
  `
export const ScoreContainer = styled.div`
     display: flex;
 
`
export const Score = styled.p`
      color: #ffffff;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    margin-left: 16px;
    @media screen and (min-width: 768px) {
 
      font-size: 24px;
      margin-left: 32px;
    
  }
   
  `

