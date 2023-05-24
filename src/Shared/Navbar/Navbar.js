import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const {user,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/');
            }).catch((error) => {

            });
    }
    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Product</Link></li>
        <li><Link to="/customers">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {user?.uid?
        <>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><button onClick={handleLogout}>Sign Out</button></li>
        </>
        :
        <>
        <li><Link to="/login">Login</Link></li>
        </>}
    </React.Fragment>
    return (
        <div className="navbar bg-black text-white sticky top-0 z-10">
            <div className="navbar-start px-6">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {menuItems} 
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">frayon</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
            <Link to="/cart"><button className="btn text-white"><FontAwesomeIcon icon={faCartShopping} /></button></Link>
          </div>
          <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;