import './_container.scss';
import React from 'react';

import NavBar from '../navbar';
import Listing from '../listing';

class Container extends React.Component {

  render() {
    return (
      <section id={'container'}>
        <NavBar/>
        <Listing/>
      </section>
    )
  }
}

export default Container;