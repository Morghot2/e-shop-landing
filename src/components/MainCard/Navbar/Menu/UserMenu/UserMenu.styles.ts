import styled from 'styled-components';

const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 120px;
`;
const LoginButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  background-color: transparent;
  color: #224f34;
  border: 2.5px solid #224f34;
  border-radius: 3px;
  width: 142px;
  height: 52px;
  margin-left: 50px;
  -webkit-transition: color 0.2s ease-in-out;
  &:hover {
    background-color: #224f34;
    color: white;
    cursor: pointer;
  }
`;

const ShoppingCart = styled.img`
  cursor: pointer;
`;

export { UserMenuWrapper, LoginButton, ShoppingCart };
