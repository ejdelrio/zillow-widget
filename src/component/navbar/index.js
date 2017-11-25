import './_navbar.scss';
import React from 'react';

class NavBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      priceClass: 'selected',
      bedsClass: '',
      sizeClass: ''
    };

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(buttonName) {
    let newState = {...this.state};

    for (let item in newState) {
      if(item === buttonName) newState[item] = 'selected';
      else newState[item] = '';
    }
    this.setState(newState);

  }

  render () {
    return (
      <section id={'navbar'}>
        <h1>Awesome Listing Widget</h1>
        <ul>
          <li className={this.state.priceClass}>
            <button onClick={() => this.buttonClick('priceClass')}>
              Price
            </button>
          </li>
          <li className={this.state.bedsClass}>
            <button onClick={() => this.buttonClick('bedsClass')}>
              Beds
            </button>
          </li>
          <li className={this.state.sizeClass}>
            <button onClick={() => this.buttonClick('sizeClass')}>
              Sq. ft.
            </button>
          </li>
        </ul>
      </section>
    )
  }
}

export default NavBar;