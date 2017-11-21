import React, { Component, PropTypes } from 'react';
import Link from 'gatsby-link'
import Pagination from './Pagination'
import Event from './Event'
import mockData from '../api/mockEventData'


/**
 * UpcomingEvents
 */
export default class UpcomingEvents extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onPaginate() {

  }

  render() {
    const events = mockData.map((event) => {
      return <Event key={event.id} bandName={event.bandName} eventDate={event.eventDate} coverPrice={event.coverPrice} />
    });

    return (
      <div className="content-box">
        <h3>UPCOMING EVENTS</h3>
        <div className="c-eventsList">
          <Pagination />
          { events }
          <Pagination />
        </div>
      </div>
    );
  }
}
