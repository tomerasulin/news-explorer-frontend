import PopupRespond from '../PopupRespond/PopupRespond';

const PopupWithConfirmation = ({ isOpen, onClose, onClick }) => {
  return (
    <PopupRespond
      isOpen={isOpen}
      onClose={onClose}
      onClick={onClick}
      text={'Registration successfully completed!'}
      subtext={'Sign in'}
    />
  );
};

export default PopupWithConfirmation;
