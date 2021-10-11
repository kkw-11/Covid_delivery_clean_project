import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}

    html, body {
        font-family: "Elice Digital Baeum",sans-serif;
    }
    
    body {
        margin: 0;
        padding: 0;
        background-color: #FFEFD5;
        box-sizing:border-box;
    };
`;

export default globalStyles;