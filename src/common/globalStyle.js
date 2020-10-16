import { createGlobalStyle } from 'styled-components';
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${colors.skyblue};
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }
`

export default GlobalStyle;