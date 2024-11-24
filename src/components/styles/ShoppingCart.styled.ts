import { styled } from 'styled-components';

export const StyledShoppingCart = styled.div`
  height: 100%;
  width: 75%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  padding: 0.5rem;
  background-color: #000;
  overflow-x: hidden;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }
  #listItems {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media (min-width: 600px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 25%;
  }
`;