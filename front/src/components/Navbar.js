import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"
import { auth } from '../services/Firebase';
import { logout } from '../actions/authActions';


function SignOut({ dispatch }) {
  return (
    auth.currentUser && (
      <button
        className="btn btn-dark button right"
        onClick={() => {
          dispatch(logout())
          auth.signOut();
        }}
      >
        Sign out
      </button>
    )
  );
}

export const PublicNavbar = () => (
  <nav>
    <section>
      <Link to="/">Home</Link>
      <img className='navbar-logo' src={logo} alt='...' />
      <Link to="/questions">Questions</Link>
      <Link to={"/login"}>Log-in</Link>
      <Link to={"/userRegister"}>Registrarse</Link>
    </section>
  </nav>
)

export const PrivateNavbar = () => (
  <nav>
    <section>
      <Link to="/">Home</Link>
      <img className='navbar-logo' src={logo} alt='...' />
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
        <button
        className="btn btn-dark button right"
        onClick={() => {
          SignOut(logout())
          auth.signOut();
        }}>
        Log-out
      </button>
    </section>
  </nav>
)
