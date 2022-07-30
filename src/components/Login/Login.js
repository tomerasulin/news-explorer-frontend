// This component is for user authorization/login
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Login = ({ isOpen, onClose, onLogin, onChangeForm }) => {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onLogin={onLogin}
      onChangeForm={onChangeForm}
      title={'Sign in'}
      changeText={'Sign up'}
    />
  );
};

export default Login;
