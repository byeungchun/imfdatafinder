import React from 'react'

const Navbar = ({title}) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i>{title}</i>
      </h1>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'IMF Data Finder'
}

export default Navbar
