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
    let newState = {...this.state}; //Copies the current state;

    for (let item in newState) {
      /*Iterates through the keys of the state.
      * If the current key matches the button, than the buttons class will change to 'selected'
      * while the other buttons will have no class
      * */
      if(item === buttonName) newState[item] = 'selected';
      else newState[item] = '';
    }
    this.setState(newState);
    this.props.buttonCick(buttonName);//Passes the clicked button to the parent container
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