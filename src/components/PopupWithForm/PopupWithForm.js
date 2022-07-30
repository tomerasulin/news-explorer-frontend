import './PopupWithForm.css';
import { useState, useEffect } from 'react';
import useFormAndValidation from '../../hooks/useFormAndValidation';

const PopupWithForm = ({ isOpen, onClose }) => {
  const [signin, setSignin] = useState('Sign in');
  const [signup, setSignup] = useState('Sign up');
  const [isSignUp, SetIsSignUp] = useState(false);

  const { isvalid, values, errors, handleChange, resetForm } =
    useFormAndValidation();

  function handleClick(e) {
    e.preventDefault();
    setSignin(signup);
    setSignup(signin);
    SetIsSignUp(!isSignUp);
  }

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

  useEffect(() => {
    resetForm();
  }, [isOpen]);

  return (
    <div
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
      onClick={handleOverlay}
    >
      <div className='popup__container'>
        <button
          className='popup__close-button'
          type='button'
          aria-label='Close'
          onClick={onClose}
        ></button>
        <form className='popup__form' autoComplete='off'>
          <h3 className='popup__title'>{signin}</h3>
          <span className='popup__span'>Email</span>
          <input
            className='popup__input'
            placeholder='Enter email'
            type='email'
            required
            name='email'
            onChange={handleChange}
            value={values.email || ''}
          ></input>
          <span
            className={`popup__error ${
              errors.email !== '' ? 'popup__error_visible' : ''
            }`}
          >
            {errors.email}
          </span>

          <span className='popup__span'>Password</span>
          <input
            className='popup__input'
            placeholder='Enter password'
            type='password'
            required
            name='password'
            onChange={handleChange}
            value={values.password || ''}
          ></input>
          <span
            className={`popup__error ${
              errors.password !== '' ? 'popup__error_visible' : ''
            }`}
          >
            {errors.password}
          </span>

          <span className={isSignUp ? 'popup__span' : 'popup__span_hide'}>
            username
          </span>
          <input
            className={isSignUp ? 'popup__input' : 'popup__input_hide'}
            placeholder='Enter your username'
            type='text'
            required
            name='username'
            onChange={handleChange}
            value={values.username || ''}
          ></input>
          <span
            className={
              isSignUp
                ? `popup__error ${
                    errors.username !== '' ? 'popup__error_visible' : ''
                  }`
                : 'popup__error_hide'
            }
          >
            {errors.username}
          </span>

          <button
            className={`popup__submit-button ${
              isvalid ? '' : 'popup__submit-button_disabled'
            }`}
            type='submit'
            name='submit'
            aria-label='Save'
          >
            {signin}
          </button>
          <p className='popup__text'>
            or&nbsp;
            <button className='popup__subtext' onClick={handleClick}>
              {signup}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
