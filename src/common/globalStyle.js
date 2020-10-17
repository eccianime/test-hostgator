import { createGlobalStyle } from 'styled-components';
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Montserrat', sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }
    
    body{
        background-color: ${colors.skyblue};
        margin: 0;
    }

    @keyframes tonext {
        75% {   left: 0;        }
        95% {   left: 100%;     }
        98% {   left: 100%;     }
        99% {   left: 0;        }
    }

    @keyframes tostart {
        75% {   left: 0;        }
        95% {   left: -300%;    }
        98% {   left: -300%;    }
        99% {   left: 0;        }
    }

        @keyframes snap {
        96% {   scroll-snap-align: center;      }
        97% {   scroll-snap-align: none;        }
        99% {   scroll-snap-align: none;        }
        100% {  scroll-snap-align: center;      }
    }

    *::-webkit-scrollbar {
       width: 0;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }
`

export default GlobalStyle;