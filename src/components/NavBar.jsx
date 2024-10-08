import React, {useState } from 'react';
import '../assets/styles/NavBar.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import { NavBarData } from './NavBarData';
import {IconContext} from 'react-icons';
import logo from '../assets/img/superhero-in-training.png'

function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar =() => setSidebar(!sidebar);


    return (
        <>
        <IconContext.Provider value={{color: 'aliceblue'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars"> 
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <Link to="/" className="menu-logo menu-bars"> 
                    <img className='logo' src={logo} alt="logo" />
                </Link>
            </div>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {NavBarData.map((item, index) => {
                        return(
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    } )}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    );
}

export default NavBar
