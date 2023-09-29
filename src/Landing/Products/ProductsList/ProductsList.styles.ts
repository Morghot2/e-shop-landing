import styled from 'styled-components';

const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 50px;

  width: 100%;
  @media (max-width: 1500px) {
    justify-content: center;
    gap: 100px;
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 33%;
`;
const ProductImg = styled.img`
  width: 450px;
  height: 600px;
  margin-bottom: 40px;
  @media (max-width: 700px) {
    max-width: 300px;
    height: 400px;
  }
`;

const ProductTitle = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  text-align: center;
  width: 70%;
  color: #373737;
  margin-bottom: 20px;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  color: #373737;
  width: 40%;
  @media (max-width: 600px) {
    width: 60%;
  }
`;

const InformationElement = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const RatingImg = styled.img`
  width: 33px;
  height: 25px;
  margin-left: 5px;
`;

export {
  ProductsListContainer,
  Product,
  ProductImg,
  ProductTitle,
  ProductInfo,
  InformationElement,
  RatingImg,
};
