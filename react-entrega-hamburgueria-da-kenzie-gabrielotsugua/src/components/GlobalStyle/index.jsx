import { createGlobalStyle } from "styled-components"

export const StyleReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    outline: none;
    list-style: none;
  }

  body {
    background-color: #1a1818;
    color: var(--color-gray-3);
  }
`