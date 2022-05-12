import React from 'react';
import {Link} from 'react-router-dom';

import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

const Nav = () => {

    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <h3>Banking App</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/"><li>Home</li></Link>
                <Link style={navStyle} to="/accounts"><li>Accounts</li></Link>
            </ul>          
        </nav>
    )
}

export default Nav;