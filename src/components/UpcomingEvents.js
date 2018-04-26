import React, { Component, PropTypes } from 'react';
import Link from 'gatsby-link'
import Pagination from './Pagination'
import Event from './Event'

export default class UpcomingEvents extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { group, index, first, last, pageCount, additionalContext } = this.props.pathContext;
    const showCount = additionalContext.showCount;
    const paginateControls = { index, first, last, showCount, pageCount};

    const events = group.map((node) => {
      const show = node.node;
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
