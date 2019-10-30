import React from 'react';

const Intro = ({image}) => {
    return (
        <div className="row">
            <div className="col=2">
                <img className="img-fluid" src={image} alt="" srcset="" />
            </div>
            <div className="col=10">
                <p>presentation presentation presentation presentation presentation</p>
            </div>
        </div>
    );
};

export default Intro;