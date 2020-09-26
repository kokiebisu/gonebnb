import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const Global = createGlobalStyle`
    ${normalize}

    * {
        box-sizing: border-box;
    }
    
    html {
        box-sizing: border-box;
    }

    body {
        font-family: 'Airbnb-Cereal';
    }
`;