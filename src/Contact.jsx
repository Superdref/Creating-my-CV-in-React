import React from 'react';

const Contact = ({tel, email, website, city}) => {
    return (
        <div className="col=3">
            <ul>
                <li>{tel}</li>
                <li>{email}</li>
                <li><a href="#">{website}</a></li>
                <li>{city}</li>
            </ul>
        </div>
    );
};

export default Contact;