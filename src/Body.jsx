import React from 'react';

import Main from './Main';
import Aside from './Aside';

const Body = () => {
    return(
        <div className="row">
            <Main />
            <Aside />
        </div>
    );
};

export default Body;