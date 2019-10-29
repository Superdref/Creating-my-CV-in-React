import React from 'react';
import './header.css';
import Contact from "./Contact";
import Who from "./Who";


const Header = () => {
    return (
        <div className="row">

            <Who
                name="Frédérique MENDY"
                job="Web developper React en formation"
            />

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