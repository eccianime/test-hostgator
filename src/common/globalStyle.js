import { createGlobalStyle } from 'styled-components';
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
    }
    
    body{
        background-color: ${colors.skyblue};
        margin: 0;
    }
`

export default GlobalStyle;