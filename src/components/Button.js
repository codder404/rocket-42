import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.4rem;
  background: ${({primary}) => (primary ? '#6C63FF' : '#010606')};
  padding: ${({big}) => (big ? '0.8rem 0.9rem' : '0.7rem 2rem')};
  color: ${({ dark }) => (dark ? '#fff' : '#010606')};
  font-size: ${({ fontBig}) => (fontBig ? '1.2rem' : '1rem')};
  white-space: nowrap;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(90%);
  }
`;
