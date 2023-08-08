import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        height : 100%;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0;
        padding: 0;

        width: 100vw;
        height : 100vh;

        font-size: 1rem;
        background-color: #ffffff;
        
        font-family: 'Pretendard', sans-serif;

    }

    #root {
        display: flex;
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
`;
