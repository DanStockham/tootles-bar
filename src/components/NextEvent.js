import React, { Component, PropTypes } from 'react';
import Event from './Event'

/**
 * NextEvent
 */
export default class NextEvent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="content-box c-upcoming-event">
        <h3 className="content-box__header-tab">Upcoming Event</h3>
        <div className="c-upcoming-event__image-container">
          <img src="http://via.placeholder.com/350x150" alt="upcoming event"/>
        </div>
        <div className="content-padding">
          <h3 className="c-upcoming-event__headline">Awesome Sauce</h3>
          <span>Date: 12/31/17</span>
          <span>Cover Price: $10.00</span>
        </div>
      </div>
    );
  }
}
