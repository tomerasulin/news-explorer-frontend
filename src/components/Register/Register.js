// This component is for user registration
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const Register = ({ isOpen, onClose, onRegister, onChangeForm }) => {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onRegister={onRegister}
      onChangeForm={onChangeForm}
      title={'Sign up'}
      changeText={'Sign in'}
    />
  );
};

export default Register;
