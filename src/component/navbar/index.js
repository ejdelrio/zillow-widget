import './_navbar.scss';
import React from 'react';

class NavBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {

    };
  }

  render () {
    return (
      <section id={'navbar'}>
        <h1>Awesome Listing Widget</h1>
        <ul>
          <li>
            <button>Price</button>
          </li>
          <li>
            <button>Beds</button>
          </li>
          <li>
            <button>Sq. ft.</button>
          </li>
        </ul>
      </section>
    )
  }
}

export default NavBar;