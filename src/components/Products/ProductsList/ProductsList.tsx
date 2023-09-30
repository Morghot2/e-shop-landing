import star from 'src/assets/star.png';
import {
  ProductsListContainer,
  ProductImg,
  Product,
  ProductTitle,
  ProductInfo,
  InformationElement,
  RatingImg,
} from './ProductsList.styles';
import { TransformedProduct } from '../../../queries/useProducts';

export const ProductsList = ({
  products,
}: {
  products: TransformedProduct[];
}) => {
  return (
    <ProductsListContainer>
      {products?.map(
        ({ id, title, price, image, score }: TransformedProduct) => (
          <Product key={id}>
            <ProductImg src={image}></ProductImg>
            <ProductTitle>{title}</ProductTitle>
            <ProductInfo>
              <InformationElement>${price}</InformationElement>
              <InformationElement>|</InformationElement>
              <InformationElement>
                {score}
                <RatingImg src={star} />
              </InformationElement>
            </ProductInfo>
          </Product>
        ),
      )}
    </ProductsListContainer>
  );
};
