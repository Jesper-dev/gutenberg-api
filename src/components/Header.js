import React from 'react';
import '../style/Header.css'

const Header = ({ title }) => {
    return (
        <div className="header">
            <h2>{title}</h2>
        </div>
    )
}

export default Header;
