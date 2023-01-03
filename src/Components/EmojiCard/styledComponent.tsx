
import styled, { createGlobalStyle } from 'styled-components'

export const EmojiItem = styled.li`
   width: 32%;
    list-style-type: none;
    margin-top: 8px;
    margin-bottom: 8px;
    @media screen and (min-width: 992px) {
      width: 24%; 
  }
  `
  export const EmojiBtn = styled.button`
    background-color: #ffffff33;
    cursor: pointer;
    outline: none;
    width: 100%;
    height: 100px;
    border: 3px solid #ffffff30;
    border-radius: 24px;
      @media screen and (min-width: 768px) {
      height: 200px; 
  }
   
  `
  export const EmojiIcon = styled.img`
     width: 50px;
      @media screen and (min-width: 768px) {
      width: 100px;
  }
   
  `