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

    *::-webkit-scrollbar {
       width: 0;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    @keyframes bounce {
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}

@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes inverted-orange {
    50% {
        background-color: ${colors.white};
        color: ${colors.mediumblue};
        border: 1px solid ${colors.mediumblue};
    }
}

@keyframes inverted-blue {
    50% {
        background-color: ${colors.white};
        color: ${colors.orange};
        border: 1px solid ${colors.orange};
    }
}


.animate__bounce {
  animation-name: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
`

export default GlobalStyle;