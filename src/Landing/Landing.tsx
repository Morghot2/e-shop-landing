import { LandingWrapper } from './Landing.styles';
import { Products } from './Products/Products';
import { MainCard } from './MainCard/MainCard';

export const Landing = () => {
  return (
    <LandingWrapper>
      <MainCard />
      <Products />
    </LandingWrapper>
  );
};
