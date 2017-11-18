import React, { Component, PropTypes } from 'react';
import Event from './Event'

/**
 * NextEvent
 */
export default class NextEvent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="content-box c-upcoming-event">
        <h3>Upcoming Event</h3>
        <img src="http://via.placeholder.com/350x150" alt="upcoming event"/>
        <h3 className="c-upcoming-event__headline">Awesome Sauce</h3>
      </div>
    );
  }
}
