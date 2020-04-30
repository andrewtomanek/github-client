import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
  --green: hsla(110, 50%, 50%, 1);
  --orange: hsla(24, 90%, 80%, 1);
  --yellow: hsla(54, 90%, 80%, 1);
  --red: hsla(0, 60%, 50%, 1);
  --dark: hsla(220,30%,30%,1);
  --grey: hsla(0,0%,65%,1);
  font-size: calc(1vw + 1vh + 0.5vmin);
}

html {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  background: var(--dark);
  margin: 0;
  padding: 0;
  font-family: 'Alegreya Sans SC',monospace;
}

button {
font-family: 'Alegreya Sans',monospace;}

input {
    font-size: 1rem;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    background-color: rgb(255, 255, 255);
    margin: 0rem;
    border-width: 0.3rem;
    border-style: inset;
    border-color:  rgb(195, 195, 195));
    border-image: initial;
}

input:focus {
    border-color: var(--green);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 0 3px rgba(0, 126, 255, 0.1);
    outline: none;
}

.input-feedback {
    color: red;
    margin-top: .25rem;
}

input.error {
    border-color: red;
}

.item-enter {
  opacity: 0;
}

`;
export default GlobalStyle;
