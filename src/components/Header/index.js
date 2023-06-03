import React from 'react'
import './index.css'
import { PrimaryNav, MenuLink, Menu} from './NavElement'
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  const customStyle = {
    fontWeight: 600, // Set your desired font weight value here
  };
  return (
    <>
      <PrimaryNav>
        <p className='lh-3 fw-normal text-white' style={customStyle} id = "patc">pat.Co</p>
        <Menu>
          <MenuLink to="/" activeStyle > HOME </MenuLink>
          <MenuLink to="/about" activeStyle className='ml-5'> ABOUT US </MenuLink>
          <MenuLink to="/WorkProcess" activeStyle>  WORK PROCESS </MenuLink>
          <MenuLink to="/ourwork" activeStyle> OUR WORK </MenuLink>
          <MenuLink to="/services" activeStyle> SERVICES </MenuLink>
          <MenuLink to="/contactus" activeStyle> CONTACT US </MenuLink>
          
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar