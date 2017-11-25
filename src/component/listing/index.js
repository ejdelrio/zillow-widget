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

    if(street.length > 19) street = street.slice(0, 19) + '...';

    return [<h4>{street}</h4>, <h4>{region}</h4>];

  }

  renderDetails(ele) {
    let {beds, baths, sqft} = ele;
    let output = beds ? `${beds} beds` : '';

    if(baths) output += output ? ` • ${baths} baths` : `${baths} baths`;
    if(sqft) output += output ? ` • ${sqft} sq ft` : `${sqft} sq ft`;

    return output;

  }



  render() {
    console.log(this.props.data);
    return (
      <section id={'listing'}>
        <ul>
          {this.props.data.map((ele, ind) => {
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