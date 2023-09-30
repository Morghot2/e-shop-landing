import styled from 'styled-components';

const ProductsWrapper = styled.section`
  background-color: white;
  padding: 5vh 7vw;
  @media (max-width: 1500px) {
    padding: 5vh 7vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
`;
const ProductsTitle = styled.div`
  font-family: 'Roboto Slab', serif;
  font-size: 64px;
  font-weight: 500;
  line-height: 84px;
  color: #224f34;
  text-align: center;
  @media (max-width: 1500px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

const ProductsSubtitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  color: #224f34;
  text-align: center;
  margin-bottom: 50px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SeeAllButton = styled.button<{ $isVisible: boolean }>`
  display: ${props => (props.$isVisible ? 'inline-block' : 'none')};
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;
  background-color: transparent;
  color: #224f34;
  border: 2px solid #224f34;
  border-radius: 3px;
  width: 224px;
  height: 65px;
  -webkit-transition: color 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px #c2efd4;
    background-color: #224f34;
    color: white;
    img {
      display: none;
    }
  }
`;
const ArrowImg = styled.img`
  margin-left: 20px;
`;

const Spinner = styled.div`
  border: 10px solid #a9d4ba;
  border-top: 10px #224f34 solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export {
  ProductsWrapper,
  ProductsTitle,
  ProductsSubtitle,
  ProductInfo,
  SeeAllButton,
  ArrowImg,
  Spinner,
};
