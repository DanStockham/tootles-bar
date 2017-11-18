import React, { Component, PropTypes } from 'react';

/**
 * AddressBlock
 */
export default class AddressBlock extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="content-box">
        <h3>Tootle's Pumpkin Inn</h3>
        <div>
          <p>117 E Main St</p>
          <p>Circleville, OH 43113</p>
        </div>
        <div>
          <span style={ {display: 'block'} }>Hours:</span>
          <p>Monday-Saturday: 4pm-2:30am</p>
          <p>(614)299-4987</p>
        </div>


      </div>
    );
  }
}
