import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root {
  --green: hsla(110, 50%, 50%, 1);
  --blue: hsla(220, 90%, 80%, 1);
  --red: hsla(0, 60%, 50%, 1);
  --dark: hsla(220,30%,30%,1);
  --grey: hsla(0,0%,65%,1);
  font-size: calc(1vw + 1vh + 0.4vmin);
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

input {
    color: var(--dark);
    font-size: 1.2rem;
    margin: 0rem;
    border: 0.3rem solid var(--dark);
    border-radius: 0.3rem;
    font-weight: 700;
}

input:focus {
    border: 0.3rem solid var(--blue);
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, .075), 0 0 0 0.1em rgba(3, 102, 214, .3);
}

input.error {
    border-color: var(--red);
}

input[type="checkbox"] {
    margin: 0;
    padding: 0.1rem 0.3rem;
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--grey);
    color: var(--green);
    width: 50%;
}

@media all and (max-width: 736px) {
    .input {
        font-size: 1.7rem;
    }
}

@media all and (max-width: 480px) {
    .input {
        font-size: 2rem;
    }
}

`;
export default GlobalStyle;
