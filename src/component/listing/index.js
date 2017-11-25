import './_listing.scss';

import React from 'react';

class Listing extends React.Component {
  constructor (props) {
    super(props);
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
                  <h4></h4>
                  <h4></h4>
                  <p>{ele.price}</p>
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