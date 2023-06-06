import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 0 0 2rem;
    

    a {
      text-align: center;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 40%; 
    height: 80%;
    
    a {
      text-align: center;
    }
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #989898};
    }
  }
`;

