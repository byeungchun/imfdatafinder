import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({title}) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i>{title}</i>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'IMF Data Finder'
}

export default Navbar
