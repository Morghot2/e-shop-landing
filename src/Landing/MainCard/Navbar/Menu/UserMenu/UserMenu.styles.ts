import styled from 'styled-components';

const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 190px;
`;
const LoginButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  background-color: transparent;
  color: #224f34;
  border: 2px solid #224f34;
  width: 142px;
  height: 52px;
  border-radius: 3px;
  margin-left: 50px;
`;

export { UserMenuWrapper, LoginButton };
