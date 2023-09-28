export const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Shop' },
    { id: 3, name: 'Features' },
    { id: 4, name: 'Contact' },
  ];
  return (
    <>
      {menuItems.map(({ id, name }) => (
        <span key={id}>{name}</span>
      ))}
    </>
  );
};
