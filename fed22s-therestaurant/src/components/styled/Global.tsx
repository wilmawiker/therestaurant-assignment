import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background: #fff;
    color: hsl(192, 100%, 9%);
    font-family: sans-serif; 
    font-size: 1.15em; 
    margin: 0;
    max-width: 100vw;
}

p {
    opacity: 0.6;
    line-height: 1.5;
}

img {
    max-width: 100% 
}
`;
