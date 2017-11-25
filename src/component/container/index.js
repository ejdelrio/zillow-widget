import './_container.scss';
import React from 'react';

import NavBar from '../navbar';
import Listing from '../listing';
import '../../assets/batmanRealty';
import '../../assets/supermanRealty';

let data = [...__SUPERMAN_DATA__.items];
for (let value in __BATMAN_DATA__) {
  data.push(__BATMAN_DATA__[value]);
}
console.log('__DATA__:', data);


class Container extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sortValue: 'price'
    }
    this.sortData = this.sortData.bind(this);
    this.changeSortValue = this.changeSortValue.bind(this);

  }

  sortData(sortValue) {
    console.log(sortValue);
    return [];
  }
  changeSortValue(buttonText) {
    this.setState({sortValue: buttonText});
  }

  render() {
    return (
      <section id={'container'}>
        <NavBar
          buttonCick={this.changeSortValue}
        />
        <Listing
          data={this.sortData(this.state.sortValue)}
        />
      </section>
    )
  }
}

console.log(window);
export default Container;