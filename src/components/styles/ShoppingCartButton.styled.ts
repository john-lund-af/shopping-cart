import styled from 'styled-components';

export const StyledShoppingCartButton = styled.button`
  position: relative;
  background-color: transparent;
  color: #ff3d00;
  border: 1px solid #ff3d00;
  border-radius: 50%;
  height: 40px;
  &:hover {
    color: #fff;
    border-color: #fff;
  }
  #itemsCount {
    position: absolute;
    background-color: #fff;
    color: #ff3d00;
    border-radius: 50%;
    padding: 0 3px;
    left: 30px;
    width: 20px;
  }
`
