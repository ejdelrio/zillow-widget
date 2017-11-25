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
              <li>

              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}

export default Listing;