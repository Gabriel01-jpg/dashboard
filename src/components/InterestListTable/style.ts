import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  
  table {
    width: 100%;
    border-spacing: 0 0.4rem;
  }
  
  th {
    color: var(--texts);
    text-align: left;
    font-weight: 500;
  }
  
  td {
    border: 0;
    border-radius: 0.25rem;
    background-color: #fff;
    
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--text-dark);
    
    padding: .6rem 1rem;
    
    &.number{
      
      a {
        text-decoration: none;
        color: var(--green);
      }
    }
    
    &:nth-child(5) {
      color: var(--texts);
    }
    
    &.verMessage {
      button {
        background: transparent;
        border: 0;

        color: var(--texts);
        
        &:hover {
          filter: brightness(0.8);
          text-decoration: underline;
        }
      }
    }
  }
`;