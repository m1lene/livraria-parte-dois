import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif; /* Certifique-se de que a fonte 'Roboto' está importada */
  }

  body {
  width: 100vw;
  height: 100vh;
  display:flex;
  justify-content: center;
  background-color:#f2f2f2;
  }

`;

export default Global;
