import { useState } from 'react';
import { StyledMobileMenu } from './MobileMenu.styles';
import { MobileNavbar } from './MobileNavbar/MobileNavbar';

export const MobileMenu = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <>
      <StyledMobileMenu
        $isOpen={isMenuOpen}
        onClick={() => setisMenuOpen(!isMenuOpen)}
      >
        <div />
        <div />
        <div />
      </StyledMobileMenu>
      <MobileNavbar $isOpen={isMenuOpen} />
    </>
  );
};
