import { MenuWrapper } from './Menu.styles';
import { NavSections } from './NavSections/NavSections';
import { UserMenu } from './UserMenu/UserMenu';

export const Menu = () => {
  return (
    <MenuWrapper>
      <NavSections />
      <UserMenu />
    </MenuWrapper>
  );
};
