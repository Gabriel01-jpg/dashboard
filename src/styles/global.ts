import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --green-dark: #377887;
    --green: #77CCBB;
    --background: #F0F2F5;
    
    
    --title: #363F5F;
    --texts: #969CB2;
    --text-dark: #000000; 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    
    @media(max-width: 720){
      font-size: 87.5%;
    }
    
    body {
      background-color: var(--background);
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
    }

    body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
    }

    button {
      cursor: pointer;
    }
    [disabled]{
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  .react-modalMessage-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
  }
`