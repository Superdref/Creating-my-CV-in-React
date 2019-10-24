import React from 'react';
import './header.css';
import Contact from "./Contact";

const Header = () => {
    return (
        <div className="row">
            <div className="col-9">
                <h1>Frédérique MENDY</h1>
                <h2>Web developper en formation</h2>
            </div>
            <Contact
                tel="+33665972875"
                email="frederiquemendy2205@gmail.com"
                website="blablabla"
                city="Biarritz"
            />
        </div>
    );
};

export default Header;