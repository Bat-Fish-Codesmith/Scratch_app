import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* <h2 className={"fishy"}>🐟 FishApp</h2> */}
            <ul className={"nav"}>
                {/* <li><Link to="/">Home</Link></li> */}
                <li className={"fishy"}><Link to="/">🐟</Link></li>
                <li><Link to="/Forum">Forum</Link></li>
                <li><Link to="/FishData">Fish Data</Link></li>
                {/* <li><Link to="/logout">Login</Link></li> */}
            </ul>
        </>
    )
}

export default Navbar;