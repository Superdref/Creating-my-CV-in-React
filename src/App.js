import React from 'react';

import Header from './Header';
import Intro from './Intro';


const App = () => {
  return (
    <div className="container">
      <Header />
      <hr />
      <Intro image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBpQrUIqfnOA0oVQFT9tqbT_hpro7ezvYdh8WWJCp08rWbcDF&s" />
    </div>
  );
};

export default App;
