import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
    text-decoration:none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;
export default GlobalStyle;
