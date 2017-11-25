import './_container.scss';
import React from 'react';

import NavBar from '../navbar';

class Container extends React.Component {

  render() {
    return (
      <section id={'container'}>
        <NavBar/>
      </section>
    )
  }
}

export default Container;