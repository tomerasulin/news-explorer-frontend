import './PopupWithForm.css';
import { useEffect } from 'react';
import useFormAndValidation from '../../hooks/useFormAndValidation';

const PopupWithForm = ({
  isOpen,
  onClose,
  onRegister,
  onLogin,
  onChangeForm,
  title,
  changeText,
}) => {
  const { isvalid, values, errors, handleChange, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === 'Sign up') {
      onRegister({
        email: values.email,
        password: values.password,
        username: values.username,
      });
    } else {
      onLogin({
        email: values.email,
        password: values.password,
      });
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
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
        <form
          className='popup__form'
          onSubmit={handleSubmit}
          autoComplete='off'
        >
          <h3 className='popup__title'>{title}</h3>
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

          {title === 'Sign up' && (
            <>
              <span className='popup__span'>username</span>
              <input
                className='popup__input'
                placeholder='Enter your username'
                type='text'
                required
                name='username'
                onChange={handleChange}
                value={values.username || ''}
                minLength='4'
                maxLength='16'
              ></input>
              <span
                className={`popup__error ${
                  errors.username !== '' ? 'popup__error_visible' : ''
                }`}
              >
                {errors.username}
              </span>
            </>
          )}

          <button
            className={`popup__submit-button ${
              isvalid ? '' : 'popup__submit-button_disabled'
            }`}
          >
            {title}
          </button>
          <p className='popup__text'>
            or&nbsp;
            <button className='popup__subtext' onClick={onChangeForm}>
              {changeText}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
