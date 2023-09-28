import { UserMenuWrapper, LoginButton } from './UserMenu.styles';
import shoppingCart from '../../../../../assets/shoppingCart.png';

export const UserMenu = () => {
  return (
    <UserMenuWrapper>
      <img src={shoppingCart} />
      <LoginButton>Login</LoginButton>
    </UserMenuWrapper>
  );
};
