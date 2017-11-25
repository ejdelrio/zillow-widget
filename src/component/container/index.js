import './_container.scss';
import React from 'react';

import NavBar from '../navbar';
import Listing from '../listing';
import '../../assets/batmanRealty';
import '../../assets/supermanRealty';

let data = [...__SUPERMAN_DATA__.items];
for (let key in __BATMAN_DATA__) {
  let value = __BATMAN_DATA__[key];
  value.price = value.cost.replace(/,/g, "");
  value.sqft = value.sq_ft;
  value.thumb = value.img;

  data.push(value);
}


class Container extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sortValue: 'price'
    };
    this.changeSortValue = this.changeSortValue.bind(this);

  }

  sortData(arr, key) {
    if (arr.length < 2) return arr;


    let middle = parseInt(arr.length / 2);
    let left   = arr.slice(0, middle);
    let right  = arr.slice(middle, arr.length);

    return this.merge(this.sortData(left, key), this.sortData(right, key), key);
  }

  merge(left, right, key) {
    let result = [];
    while (left.length && right.length) {

      parseInt(left[0][key]) <= parseInt(right[0][key]) ?
        result.push(left.shift()) :
        result.push(right.shift());
    }

    while (left.length)
      result.push(left.shift());

    while (right.length)
      result.push(right.shift());

    return result;
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
          data={this.sortData(data, this.state.sortValue)}
        />
      </section>
    )
  }
}

export default Container;



