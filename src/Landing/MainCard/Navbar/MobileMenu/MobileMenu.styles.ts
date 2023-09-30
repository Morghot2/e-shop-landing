import styled from 'styled-components';

export const StyledMobileMenu = styled.div<{ $isOpen: boolean }>`
  width: 2rem;
  height: 2rem;
  top: 15px;
  right: 20px;
  z-index: 2;
  display: none;
  @media (max-width: 1250px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column;
  }
  position: ${({ $isOpen }) => ($isOpen ? 'fixed' : 'static')};

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ $isOpen }) => ($isOpen ? 'white' : '#224f34')};
    border-radius: 10px;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ $isOpen }) =>
        $isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
