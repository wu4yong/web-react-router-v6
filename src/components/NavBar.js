import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {useAuth} from "../store";

//导航
//navLink在链接被触发时添加class:active
const NavBar = () => {
     const { user } = useAuth();
    //props给导航加上active时的样式
    //当某个link被点击时，isActive会被置为true
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    return (
       <nav className='primary-nav'>
           {/*<Link to='/'>Home</Link>*/}
           {/*<Link to='/about'>About</Link>*/}
           <NavLink style={navLinkStyles} to='/'>Home</NavLink>
           <NavLink style={navLinkStyles} to='/about'>About</NavLink>
           <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
           <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
           {
               !user && <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
           }
       </nav>
    );
};

export default NavBar;
