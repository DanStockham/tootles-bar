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

  render() {
    const { group, index, first, last, pageCount } = this.props.pathContext;
    const paginateControls = { index, first, last, pageCount};

    console.log(index, first, last, pageCount)

    const events = group.map((node) => {
      const show = node.node;
      console.log(show.image)
      return <Event key={show.id} 
                    showName={show.name} 
                    showDate={show.date} 
                    coverPrice={show.coverPrice}
                    image={show.image ? show.image.file.url : null}
                    slug={show.slug} />
    });

    return (
      <div className="content-box">
        <h3 className="content-box__header-tab">UPCOMING EVENTS</h3>
        <div className="c-eventsList">
          <Pagination paginateControls={paginateControls}/>
          { events }
          <Pagination paginateControls={paginateControls}/>
        </div>
      </div>
    );
  }
}
