import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; 

export const Header = () => {
  const { pathname } = useLocation();
  const { user } = useAuth(); 

  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__list">

          <li className="menu__item">
            <NavLink to="/" className="menu__link" activeClassName="menu__link_active" state={{ from: pathname }}>Home</NavLink>
          </li>

          <li className="menu__item">
            <NavLink to="/about" className="menu__link" activeClassName="menu__link_active" state={{ from: pathname }}>About</NavLink>
          </li>

          <li className="menu__item">
            <NavLink to="/blog" className="menu__link" activeClassName="menu__link_active" state={{ from: pathname }}>Blog</NavLink>
          </li>

          <li className="menu__item">
            <NavLink to="/contacts" className="menu__link" activeClassName="menu__link_active" state={{ from: pathname }}>Contacts</NavLink>
          </li>

          {/* Обновленный код для отображения ссылок в зависимости от статуса аутентификации пользователя */}
          {user ? (
            <>
              <li className="menu__item">
                <NavLink to="/profile" className="menu__link" activeClassName="menu__link_active">Profile</NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/logout" className="menu__link" activeClassName="menu__link_active">Logout</NavLink>
              </li>
            </>
          ) : (
            <li className="menu__item">
              <NavLink to="/login" className="menu__link" activeClassName="menu__link_active" state={{ from: pathname }}>Login</NavLink>
            </li>
          )}

        </ul>
      </nav>
    </header>
  );
};
