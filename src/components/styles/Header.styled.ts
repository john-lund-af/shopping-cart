import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  padding: 20px 10px;
`