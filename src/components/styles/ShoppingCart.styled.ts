import { styled } from 'styled-components';

export const StyledShoppingCart = styled.div`
  height: 100%;
  width: 50%;
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
  }
  #listItems {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;