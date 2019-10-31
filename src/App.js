import React from 'react';

import Header from './Header';
import Intro from './Intro';
import Body from './Body';
import Footer from './Footer';



const App = () => {
  return (
    <div className="container">
      <Header />
      <hr />
      <Intro image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJBpQrUIqfnOA0oVQFT9tqbT_hpro7ezvYdh8WWJCp08rWbcDF&s" />
      <hr />
      <Body />
      <hr />
      <Footer
        github="https://github.com/"
        linkedin="https://fr.linkedin.com/"
        instagram="https://www.instagram.com/"
      />
    </div>
  );
};

export default App;
