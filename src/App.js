import React, { Component } from 'react';

import Navbar from  './components/navbar/Navbar';
import Search from  './components/search/Search';

class App extends Component {
  render() {
    return (
      <div>
         <Navbar />
         <Search />
          
      </div>
     
    );
  }
}

export default App;
