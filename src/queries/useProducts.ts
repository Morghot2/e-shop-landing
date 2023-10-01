import { useQuery, useQueryClient } from 'react-query';

export type SingleProduct = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

export type TransformedProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  score: number;
};

const fetchProducts = async (limit: number) =>
  await fetch(`https://fakestoreapi.com/products?limit=${limit}`).then(res =>
    res.json(),
  );

const selectProductsData = (data: SingleProduct[]) =>
  data.map(({ id, title, price, image, rating }) => ({
    id,
    title,
    price,
    image,
    score: rating.rate,
  }));

export const useProducts = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['Products'],
    queryFn: () => fetchProducts(3),
    select: selectProductsData,
    staleTime: Infinity,
  });
  const fetchMoreData = async () => {
    const currentDataLength = data ? data.length : 0;
    const nextLimit = currentDataLength + 6;
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${nextLimit}`,
    );
    const additionalData = await response.json();

    queryClient.setQueryData(['Products'], additionalData);
  };
  return {
    isLoading,
    error,
    data,
    fetchMoreData,
  };
};
