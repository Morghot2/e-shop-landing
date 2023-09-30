import styled from 'styled-components';

const NavSectionsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
`;

const NavItem = styled.button`
  font-family: 'Poppins', sans-serif;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 500;
  color: #224f34;
  line-height: 33px;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  border: none;
  padding: 10px;
  &:hover {
    font-size: 26px;
  }
`;

export { NavSectionsWrapper, NavItem };
