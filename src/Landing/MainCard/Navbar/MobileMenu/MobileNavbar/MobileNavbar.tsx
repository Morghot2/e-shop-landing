import { StyledMobileNavbar } from './MobileNavbar.styles';
export const MobileNavbar = ({ $isOpen }: { $isOpen: boolean }) => {
  const navSections = [
    { id: 1, name: 'HOME' },
    { id: 2, name: 'SHOP' },
    { id: 3, name: 'FEATURES' },
    { id: 4, name: 'CONTACT' },
    { id: 5, name: 'MY SHOPPING' },
    { id: 6, name: 'LOGIN' },
  ];
  return (
    <StyledMobileNavbar $isOpen={$isOpen}>
      {navSections.map(({ id, name }) => (
        <button key={id}>{name}</button>
      ))}
    </StyledMobileNavbar>
  );
};
