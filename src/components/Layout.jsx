import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useAuth } from '../hooks/useAuth';

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signout } = useAuth(); 

  const { state, pathname } = location;

  const backHandler = () => {
    navigate(state?.from, { state: { pathname } });
  }

  const handleLogout = () => {
    signout(() => navigate('/login'));
  }

  return (
    <div className="container">
      
      <Header />

      <div className="history-block">
        {state?.from && <button onClick={backHandler}>{state?.from}</button>}
      </div>

      <main className="main">
        <Outlet />
      </main>

      <Footer />

      { }
      {user && (
        <button onClick={handleLogout}>Logout</button>
      )}

    </div>
  );
};
