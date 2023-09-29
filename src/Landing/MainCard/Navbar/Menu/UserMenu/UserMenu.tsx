import { UserMenuWrapper, LoginButton, ShoppingCart } from './UserMenu.styles';
import shoppingCart from 'src/assets/shoppingCart.png';

export const UserMenu = () => {
  return (
    <UserMenuWrapper>
      <ShoppingCart src={shoppingCart} />
      <LoginButton>Login</LoginButton>
    </UserMenuWrapper>
  );
};
