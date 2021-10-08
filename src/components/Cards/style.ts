import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  margin-top: -5rem;

  div {
    background: white;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    
    header {
      display: flex;
      justify-content: space-between;
    }
    
    strong {
      margin-top: .5rem;
      display: inline-block;
      font-weight: 600;
      font-size: 2rem;
    }
  }
`;