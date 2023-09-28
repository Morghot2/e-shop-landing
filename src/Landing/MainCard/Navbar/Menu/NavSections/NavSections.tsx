import { NavSectionsWrapper, NavItem } from './NavSections.styles';

export const NavSections = () => {
  const navSections = [
    { id: 1, name: 'HOME' },
    { id: 2, name: 'SHOP' },
    { id: 3, name: 'FEATURES' },
    { id: 4, name: 'CONTACT' },
  ];
  return (
    <NavSectionsWrapper>
      {navSections.map(({ id, name }) => (
        <NavItem key={id}>{name}</NavItem>
      ))}
    </NavSectionsWrapper>
  );
};
