import React from 'react';

const Footer = ({github, linkedin, instagram}) => {
    return ( 
        <footer>
            <ul className="d-flex flex-row list-unstyled justify-content-around">
                <li><a href= {github} target="_blank" rel="noopener noreffer">Github</a></li>
                <li><a href= {linkedin} target="_blank" rel="noopener noreffer">Linkedin</a></li>
                <li><a href= {instagram} target="_blank" rel="noopener noreffer">Instagram</a></li>
            </ul>
        </footer>
    );
};

export default Footer;