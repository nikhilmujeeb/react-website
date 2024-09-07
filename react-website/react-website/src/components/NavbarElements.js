import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0095ff;
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 20px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: white;
  padding: 10px;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;
