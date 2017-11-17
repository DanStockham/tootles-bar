import React, { Component, PropTypes } from 'react';
import Event from './Event'

/**
 * NextEvent
 */
export default class NextEvent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="content-box">
        <Event bandName="Awesome Sauce" eventDate="12/11/2017" coverPrice="$10.00" />
      </div>
    );
  }
}
