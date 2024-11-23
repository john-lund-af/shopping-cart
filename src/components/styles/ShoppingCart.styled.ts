import { styled } from 'styled-components';

export const StyledShoppingCart = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  padding: 0.5rem;
  background-color: #fff;
  overflow-x: hidden;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;