import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #000000;
    --color-primary: #FF577F;
    --color-secondary: #FF427F;
    --color-primary-negative: #59323F;
    --color-gray400:#121214;
    --color-gray300:#212529;
    --color-gray200:#343B41;
    --color-gray100:#868E96;
    --color-gray0:#F8F9FA;
    --color-white: #FFFFFF;
    --color-success: #3FE864;
    --color-negative: #E83F5B;
    
    --weight1: 700;
    --weight2: 600;
    --weight3: 500;
    --weight4: 400;

    --font-size1: 24px;
    --font-size2: 22px;
    --font-size3: 20px;
    --font-size4: 18px;
    --font-size5: 16px;
    --font-size6: 14px;
    --font-size7: 12px;
    --font-size8: 10px;
    --font-size9: 9px;

    --radius1: 16px;
    --radius2: 8px;
    --radius3: 4px;
  }  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body,html{
    width: 100%;
    min-height: 100vh;
  }
  
  a{
    color: unset;
    text-decoration: none;
  }

  body {
    background-color: var(--color-white);
  }

  button {
    cursor: pointer;
  }
`;
