import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}

    body{
        margin: 0;
        padding: 0;
        font-size: 14px;
        background-color: #e8f5e9;
        box-sizing:border-box;
    };
`;

export default globalStyles;