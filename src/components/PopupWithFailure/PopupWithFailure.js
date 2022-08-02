import PopupRespond from '../PopupRespond/PopupRespond';

const PopupWithFailure = ({ isOpen, onClose, onClick, text, subtext }) => {
  return (
    <PopupRespond
      isOpen={isOpen}
      onClick={onClick}
      onClose={onClose}
      text={text}
      subtext={subtext}
    />
  );
};

export default PopupWithFailure;
