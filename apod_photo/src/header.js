import React from 'react'
import nasaLogo from './header-logo.jpeg';

const Header = () => {
  return (
    <div className="header">
      <img className='logo-img' src={nasaLogo} alt="Nasa Logo" />
    </div>
  )
}
export default Header;