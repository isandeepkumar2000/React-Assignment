
import styled, { createGlobalStyle } from 'styled-components'

export const AppConatiner = styled.nav`
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(
      to bottom right,
      #9796f0 0.5%,
      #fbc7d4 150%
    );
    min-height: 100vh;
   
  `
  export const EmojiGameBody = styled.nav`
 display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
 
`
export const EmojiListConatiner = styled.ul`
     display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    padding: 0px;
    max-width: 1000px;
  `