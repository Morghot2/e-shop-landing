import { useState } from 'react';
import { ProductsList } from './ProductsList/ProductsList';
import {
  ProductsWrapper,
  ProductsTitle,
  ProductsSubtitle,
  SeeAllButton,
  ArrowImg,
  Spinner,
} from './Products.styles';
import { useProducts } from '../../queries/useProducts';
import arrow from 'src/assets/arrow.png';

export const Products = () => {
  const [isButtonVisible, setButtonVisibility] = useState(true);
  const { data, isLoading, fetchMoreData } = useProducts();

  const handleButtonClick = () => {
    setButtonVisibility(false);
    fetchMoreData();
  };

  const productsList = data ? data : [];

  return (
    <ProductsWrapper>
      <ProductsTitle>Best selling</ProductsTitle>
      <ProductsSubtitle>
        Get in on the trend with our curated selection of best-selling styles.
      </ProductsSubtitle>
      {isLoading ? <Spinner /> : <ProductsList products={productsList} />}
      <SeeAllButton
        onClick={handleButtonClick}
        $isVisible={isButtonVisible && !isLoading}
      >
        See all
        <ArrowImg src={arrow} />
      </SeeAllButton>
    </ProductsWrapper>
  );
};
