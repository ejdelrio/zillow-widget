import './_listing.scss';

import React from 'react';

class Listing extends React.Component {
  constructor (props) {
    super (props);

    this.renderAddress = this.renderAddress.bind (this);
  }

  renderAddress(address) {
    //Splits the address into street address and city, state and zip.
    //Street address is compressed if too long
    if(!address) return [<h4></h4>, <h4></h4>];
    let splitAddress = address.split(', ');

    let street = splitAddress.shift();
    let region = splitAddress.join(', ');

    if(street.length > 19) street = street.slice(0, 19) + '...';

    return [<h4>{street}</h4>, <h4>{region}</h4>];

  }

  renderDetails(ele) {
    //Consolidates bed, sqft and baths into a single string.
    let {beds, baths, sqft} = ele;
    let output = beds ? `${beds} beds` : '';

    if(baths) output += output ? ` • ${baths} baths` : `${baths} baths`;
    if(sqft) output += output ? ` • ${sqft} sq ft` : `${sqft} sq ft`;

    return output;

  }



  render() {
    return (
      <section id={'listing'}>
        <ul>

          {this.props.data.map((ele, ind) => {
            //Maps through data creating an li element for each listing.
            //values of each listing populate the internal elements of the li
            return(
              <li key={ind}>
                <a href={ele.url}>
                  <img src={ele.thumb}/>
                  <div>
                    <h5>{ele.built ? `Built in ${ele.built}`: ''}</h5>
                    {this.renderAddress(ele.address)}
                    <h3>{`$${parseInt(ele.price).toLocaleString()}`}</h3>
                    <p>{this.renderDetails(ele)}</p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default Listing;