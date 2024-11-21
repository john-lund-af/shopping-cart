import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  padding: 40px 0;
`