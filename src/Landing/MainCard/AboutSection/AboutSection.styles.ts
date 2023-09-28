import styled from 'styled-components';

const AboutWrapper = styled.section`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1500px) {
    margin-top: 10px;
  }
`;

const AboutImg = styled.div`
  display: inline-block;
  padding-top: 35px;
  @media (max-width: 1500px) {display: none;}; 
}
`;

const AboutText = styled.div`
  color: #224f34;
  display: inline-block;
`;
const AboutTitle = styled.p`
  font-family: 'Rufina', serif;
  font-weight: 700;
  width: 650px;
  font-size: 86px;
  line-height: 106px;
  margin-bottom: 0px;
  @media (max-width: 1500px) {width: 100%; text-align: center; line-height: 80px; font-size: 60px;}; 
  @media (max-width: 400px) {width: 100%; text-align: center; font-size: 35px; line-height: 50px}; 
}
`;
const AboutSubtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  width: 565px;
  font-size: 24px;
  line-height: 52.8px;
  margin-bottom: 52px;
  margin-bottom: 0px;
  @media (max-width: 1500px) {width: 100%; text-align: center; line-height: 30px; font-size: 18px};}; 
  @media (max-width: 400px) {width: 100%; text-align: center; font-size: 17px; line-height: 25px};

}
`;

const ButtonWrapper = styled.div`
  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AboutButton = styled.button`
  width: 258px;
  height: 74px;
  border-radius: 3px;
  background-color: #224f34;
  color: white;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin-top: 20px;
  @media (max-width: 1500px) {width: 100%; text-align: center;}; 
  @media (max-width: 400px) {width: 70%; text-align: center; font-size: 17px};
}
`;
export {
  AboutWrapper,
  AboutImg,
  AboutText,
  AboutTitle,
  AboutSubtitle,
  AboutButton,
  ButtonWrapper,
};
