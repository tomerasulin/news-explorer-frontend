// This popup response for popups that confirm or fail the user request from the server
import './PopupRespond.css';
import { useEffect } from 'react';

const PopupRespond = ({ isOpen, onClose, onClick, text, subtext }) => {
  useEffect(() => {
    // with this we prevent adding the listener if the popup is not opened
    if (!isOpen) return;
    // we should define the handler inside `useEffect`, so that it wouldn’t lose the reference to be able to remove it
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    // don’t forget to remove the listener in the `clean-up` function
    return () => document.removeEventListener('keydown', closeByEscape);
    // here we watch `isOpen` to add the listener only when it’s opened
  }, [isOpen, onClose]);

  // here is the overlay handler
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      onClick={handleOverlay}
    >
      <div className='popup__container-respond'>
        <button
          className='popup__close-button'
          type='button'
          aria-label='Close'
          onClick={onClose}
        ></button>
        <form className='popup__form-respond'>
          <p className='popup__text-respond'>{text}</p>
          <button className='popup__subtext-respond' onClick={onClick}>
            {subtext}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupRespond;
