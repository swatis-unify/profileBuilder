import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="bg-white">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      <Link to="/signin" activeClassName="active">Sign in</Link>
      <Link to="/signup" activeClassName="active">
        <button className="bg-red btn fg-white">Sign Up</button>
      </Link>
    </nav>
  );
};

export default Header;
