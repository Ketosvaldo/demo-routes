import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';

const Header = (props) => {

    const {title, url} = props;

    return ( 
        <header className="App-header">
            <a href={url} className="App-cola">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">{title}</h1>
                <div className="App-Routes">
                    <a href="./" className="Text">Home</a>
                    <a href="about" className="Text">About</a>
                    <a href="notes" className="Text">Notes</a>
                    <a href="contact" className="Text">Contact</a>
                </div>
            </a>
        </header>
    );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;