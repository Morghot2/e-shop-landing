import { MainCardWrapper } from './MainCard.styles';
import { Navbar } from './Navbar/Navbar';
import { AboutSection } from './AboutSection/AboutSection';

export const MainCard = () => {
  return (
    <MainCardWrapper>
      <Navbar />
      <AboutSection />
    </MainCardWrapper>
  );
};
