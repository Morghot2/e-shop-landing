import {
  AboutImg,
  AboutText,
  AboutWrapper,
  AboutTitle,
  AboutSubtitle,
  ButtonWrapper,
  AboutButton,
} from './AboutSection.styles';
import main from '../../../assets/main.png';

export const AboutSection = () => {
  return (
    <AboutWrapper>
      <AboutText>
        <AboutTitle>Discover and Find Your Own Fashion!</AboutTitle>
        <AboutSubtitle>
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </AboutSubtitle>
        <ButtonWrapper>
          <AboutButton>Explore Now</AboutButton>
        </ButtonWrapper>
      </AboutText>
      <AboutImg>
        <img src={main} />
      </AboutImg>
    </AboutWrapper>
  );
};
