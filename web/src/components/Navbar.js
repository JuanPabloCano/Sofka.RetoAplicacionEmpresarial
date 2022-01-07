import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"

export const PublicNavbar = () => (
  <nav>
    <section>
      <Link to="/">Home</Link>
      <img className='navbar-logo' src={logo} alt='...'/>
      <Link to="/questions">Questions</Link>
      <Link className='navbar-login__button' to={"/login"}>Log-in</Link>
      <Link className='navbar-login__button' to={"/login"}>Log-out</Link>
    </section>
  </nav>
)

export const PrivateNavbar = () => (
  <nav>
    <section>
      <Link to="/">Home</Link>
      <img className='navbar-logo' src={logo} alt='...'/>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
    </section>
  </nav>
)
