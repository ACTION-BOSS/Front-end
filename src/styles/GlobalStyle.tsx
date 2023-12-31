import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        --red-pink: #FF005E;
        --deem: rgba(41, 47, 61, 0.40);
    }

    *, *::before, *::after {
        box-sizing: border-box;  
        font-family: 'Pretendard', sans-serif;           
    }  

    html {
        height : 100%;
    }

    body {
        display: flex;

        margin: 0;
        padding: 0;

        width: 100%;
        height : 100%;

        font-size: 1rem;
        background-color: #ffffff;

        font-family: 'Pretendard', sans-serif;
    }

    #root {
        display: flex;
        width: 100%;
        height: 100%;
        /* overflow-y: hidden; */
    }

    @font-face {
    font-family: 'GilbeotTG';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/GilbeotTG.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
 
`;
