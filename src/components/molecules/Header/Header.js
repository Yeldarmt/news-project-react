import React, {useState} from 'react';
import chevronDown from '../../../assets/images/chevronDown1.png';
import cross from '../../../assets/images/cross.png';
import './index.scss';
import {users} from "../../../mock";

function Header() {
  const token = localStorage.getItem('token');
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onEmailValueChange = (e) => {
    const val = e.target.value;
    setEmailValue(val);
  };

  const onPasswordValueChange = (e) => {
    const val = e.target.value;
    setPasswordValue(val);
  };

  const onLoginClick = () => {
    const user = users.find((n) => n.email === emailValue);
    if (user && user.password === passwordValue) {
      user && console.log('user', user);
      localStorage.setItem('token', 'token12345');
      window.location.reload();
      setShowLoginPopup(false);
      setIsAuthError(false);
    } else {
      setIsAuthError(true);
    }
  };

  const closePopupClick = () => {
    setShowLoginPopup(false);
    setIsAuthError(false);
  };

  const logoutClick = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="header d-flex align-items-center px-4">
      <a href="/" className="header-text">habar.com</a>
      <nav className="header-nav d-flex align-items-center mr-auto ml-5">
        <a className="header-nav__item" href="/news">All News</a>
        <a className="header-nav__item" href="/news?category=sport">Sport</a>
        <a className="header-nav__item" href="/news?category=politics">Politics</a>
        <a className="header-nav__item" href="/news?category=technology">Technology</a>
        <a className="header-nav__item" href="/news?category=business">Business</a>
        {token ? (
          <a
            className="header-nav__item"
            href="#"
            onClick={logoutClick}
          >
            Log Out
          </a>
        ) : (
          <div className="header-nav__dropdown d-flex align-items-center" onClick={() => setShowLoginPopup(true)}>
            <span className="">Sign In</span>
            <img src={chevronDown} alt="arrow down"/>
          </div>
        )}
      </nav>
      <form action="#" className="search d-flex">
        <input type="text" className="search__input" placeholder="Search"/>
          <button className="search__button">
            Search News
          </button>
      </form>
      {showLoginPopup && (
        <div className="popup" id="popup">
          <div className="popup__content d-flex flex-column align-items-center py-5">
            <div className="popup__close d-flex justify-content-end">
              <img
                src={cross}
                alt="popup img"
                className="popup__img"
                onClick={closePopupClick}
              />
            </div>
            <div className="form__group">
              <label htmlFor="email" className="form__label">Email address</label>
              <input
                type="email"
                className="form__input"
                placeholder="Full Name"
                id="email"
                required
                value={emailValue}
                onChange={onEmailValueChange}
              />
            </div>
            <div className="form__group">
              <label htmlFor="password" className="form__label">Password</label>
              <input
                type="password"
                className="form__input"
                placeholder="Password"
                id="password"
                required
                value={passwordValue}
                onChange={onPasswordValueChange}
              />
            </div>
            <button
              className="popup__btn w-50"
              disabled={!emailValue || !passwordValue}
              onClick={onLoginClick}
            >
              Login
            </button>
            {isAuthError && <div className="my-3 text-danger">Invalid email or password!</div>}
          </div>
        </div>
      )}
    </div>
  )
}

export default Header;
