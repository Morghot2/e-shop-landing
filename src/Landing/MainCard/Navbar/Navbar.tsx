import { Menu } from './Menu/Menu';
import { NavbarWrapper, Logo } from './Navbar.styles';

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>Rivo</Logo>
      <Menu />
    </NavbarWrapper>
  );
};
