import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu]= useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate();

    const handleNav = (sectionId) => {
    setMenu(sectionId)
    navigate('/', { state: { scrollTo: sectionId } })  // <--- this ensures page change
  }


  // const handleScrollNav = (target) => {
  //   navigate('/'); // Go to home first
  //   setTimeout(() => {
  //     const element = document.getElementById(target);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }, 100); // Delay to wait for the Home page to render
  // };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        <li><Link to='/' onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home</Link></li>
        <li onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile-app</li>
        <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact us</li>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
