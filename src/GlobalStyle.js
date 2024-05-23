import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2ec4b6
  }

  #root {
    max-width: 800px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    unicode-bidi: isolate;
    text-align: center;
    margin-top: 20px;
    

    & > section {
      background-color: white;
      max-width: 800px;
      width: 95%;
      border-radius: 16px;
      padding: 20px;
    }
  }
`;

export default GlobalStyle;
