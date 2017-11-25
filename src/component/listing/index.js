import './_listing.scss';

import React from 'react';

class Listing extends React.Component {
  constructor (props) {
    super (props);

    this.renderAddress = this.renderAddress.bind (this);
  }

  renderAddress(address) {
    if(!address) return [<h4></h4>, <h4></h4>];
    let splitAddress = address.split(', ');
    console.log(splitAddress)

    let street = splitAddress.shift();
    let region = splitAddress.join(', ');

    return [<h4>{street}</h4>, <h4>{region}</h4>];

  }

  renderDetails(rooms, beds, sqft) {

  }



  render() {
    console.log(this.props.data);
    return (
      <section id={'listing'}>
        <ul>
          {this.props.data.map((ele, ind) => {
            return(
              <li key={ind}>
                <img src={ele.thumb}/>
                <div>
                  <h5>{ele.built ? `Built in ${ele.built}`: ''}</h5>
                  {this.renderAddress(ele.address)}
                  <h3>{`$${parseInt(ele.price).toLocaleString()}`}</h3>
                  <p>{`${ele.beds} beds	• ${ele.baths} baths • ${ele.sqft} sq ft`}</p>
                </div>

              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default Listing;