import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--green-dark);
  
  

`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;

  margin: 0 auto;
  padding: 2rem 1rem 5rem 1rem;
  
  display: flex;
  justify-content: space-between;
  align-items: start;
  
  h1 {
    color: #fff;
    font-size: 2rem;
  }
  
  button {
    font-size: 1rem;
    color: white;
    
    background-color: var(--green);
    border: none;
    border-radius: 0.25rem;
    
    padding: 0 2rem;
    height: 2rem;
    transition: filter 0.3s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;