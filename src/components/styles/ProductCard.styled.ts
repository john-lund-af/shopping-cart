import { styled } from 'styled-components';

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  width: 300px;
  .header {
    margin: 0 auto;
  }
  img {
    object-fit: cover;
  }
  .body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .big-btn {
    width: 100%;
  }
  .small-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`