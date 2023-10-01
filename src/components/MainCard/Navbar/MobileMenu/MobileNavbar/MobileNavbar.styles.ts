import styled from 'styled-components';

export const StyledMobileNavbar = styled.div<{ $isOpen: boolean }>`
  display: none;
  flex-flow: row nowrap;
  border-radius: 3px;

  button {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 24px;
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 0;
    text-align: center;
    height: 10%;
    &:hover {
      color: #224f34;
      background-color: white;
      transition: 0.3s;
      cursor: pointer;
      @media (max-width: 455px) {
        width: 100vw;
        height: 15%;
      }
    }
    @media (max-width: 1250px) {
      font-size: 20px;
    }
  }

  @media (max-width: 1250px) {
    display: flex;
    flex-flow: column nowrap;
    background-color: #224f34;
    position: fixed;
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;

    width: 30vw;
    height: 100vh;
    padding-top: 6em;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
  @media (max-width: 455px) {
    width: 100vw;
    height: 100vh;
  }
`;
