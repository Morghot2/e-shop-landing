import { Menu } from './Menu/Menu';
import { NavbarWrapper, Logo } from './Navbar.styles';
import { MobileMenu } from './MobileMenu/MobileMenu';

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>Rivo</Logo>
      <Menu />
      <MobileMenu />
    </NavbarWrapper>
  );
};
