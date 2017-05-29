import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="bg-white">
      <IndexLink to="/user/home" activeClassName="active">Profile</IndexLink>
      <Link to="/user/settings" activeClassName="active">Settings</Link>
    </nav>
  );
};

export default Header;
