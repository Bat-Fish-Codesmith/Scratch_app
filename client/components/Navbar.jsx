import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Forum">Forum</Link></li>
                <li><Link to="/FishData">Fish Data</Link></li>
                <li><Link to="/logout">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;