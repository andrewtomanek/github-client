import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
  --green: hsla(110, 50%, 50%, 1);
  --blue: hsla(220, 90%, 80%, 1);
  --red: hsla(0, 60%, 50%, 1);
  --dark: hsla(220,30%,30%,1);
  --grey: hsla(0,0%,80%,1);
  font-size: calc(1vw + 1vh + 0.4vmin);
}

html {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

body {
    background: hsla(220,95%,95%,1);
    margin: 0;
    padding: 0;
    font-family: Arial, monospace;
}

button {
    font-family: Arial, monospace;
}

img {
    margin: 0;
    padding: 0;
    width: 20%;
}

input[type="checkbox"] {
    margin: 0;
    padding: 0.1rem 0.3rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--grey);
    color: var(--green);
}

`;
export default GlobalStyle;
