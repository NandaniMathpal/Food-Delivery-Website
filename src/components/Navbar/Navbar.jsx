import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu]= useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {getTotalCartAmount} = useContext(StoreContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }; 

  return (
    <div className='navbar'>
      <div className="navbar-left">
        {/* <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link> */}
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(prev => !prev)}>
          &#9776;
        </div>
        <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
        </div>

      <ul className={`navbar-menu ${isMobileMenuOpen?'active':''}`}>
        <li><Link to='/' onClick={()=>{ setMenu("home"); setIsMobileMenuOpen(false);}}className={menu==="home"?"active":""}>Home</Link></li>
        <a href='#explore-menu' onClick={()=>{ setMenu("menu"); setIsMobileMenuOpen(false);}}className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>{ setMenu("mobile-app"); setIsMobileMenuOpen(false);}}className={menu==="mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>{ setMenu("contact-us"); setIsMobileMenuOpen(false);}}className={menu==="contact-us"?"active":""}>Contact us</a>
      </ul>

      <div className='navbar-right'>
        <Link to='/cart'>
          <img src={assets.basket_icon} alt="Cart" className='cart-icon' />
        </Link>
  
        <button onClick={() => setShowLogin(true)}>Sign In</button>
        </div>
       </div> 
  )
}

export default Navbar
