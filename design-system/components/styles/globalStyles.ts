// src/styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';
import { typography } from './typograph';
import { createColorVariables } from './colors';
import { createLayoutVariables } from './layout';

export const GlobalStyle = createGlobalStyle`
  ${typography}

  :root {
    ${createColorVariables()}
    ${createLayoutVariables()}
  }

  body {
    color: var(--primary);
    background-color: var(--light);
  }
`;
