import { colors, fonts } from './_mixin';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset};
  * {
      box-sizing: border-box;
      background: ${colors.defaultBlack};
      color: white;
  }

  body{
    padding: 2rem;
    background: ${colors.defaultBlack};
  }

  a{
    color: unset;
    &:hover{
      color: unset;
    }
  }

  strong{
    font-weight: 700;
  }
  
  button{
    cursor: pointer;
    background-color: white;
    outline: none;
    border: none;
    &:active {
      outline: none;
      border: none;
    }
  }

`;
