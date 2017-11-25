import './_navbar.scss';
import React from 'react';

class NavBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      price: 'selected',
      beds: '',
      sqft: ''
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
    this.props.buttonCick(buttonName);
  }

  render () {
    return (
      <section id={'navbar'}>
        <h1>Awesome Listing Widget</h1>
        <ul>
          <li className={this.state.price}>
            <button onClick={() => this.buttonClick('price')}>
              Price
            </button>
          </li>
          <li className={this.state.beds}>
            <button onClick={() => this.buttonClick('beds')}>
              Beds
            </button>
          </li>
          <li className={this.state.sqft}>
            <button onClick={() => this.buttonClick('sqft')}>
              Sq. ft.
            </button>
          </li>
        </ul>
      </section>
    )
  }
}

export default NavBar;