import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  #root {
    /* border: 1px solid black; */
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    unicode-bidi: isolate;
    text-align: center;
    

    & > section {
      border: 1px solid black;
      width: 100%;
      border-radius: 16px;
      padding: 20px;
    }
  }
`;

export default GlobalStyle;
