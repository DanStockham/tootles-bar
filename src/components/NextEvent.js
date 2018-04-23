import React, { Component, PropTypes } from 'react';
import Link from 'gatsby-link';

/**
 * NextEvent
 */
export const NextEvent = (props) => { // eslint-disable-line react/prefer-stateless-function
    const {name, date, slug, coverPrice, image} = props.nextShow.node;
    const convertDate = new Date(date);

    return (
      <div className="content-box c-upcoming-event">
        <h3 className="content-box__header-tab">Upcoming Event</h3>
        <div className="c-upcoming-event__image-container">
          <Link to={`${slug}`} >
            <img src={image ? image.file.url : 'http://via.placeholder.com/350x150'} alt="upcoming event"/>
          </Link>
        </div>
        <div className="content-padding">
          <h3 className="c-upcoming-event__headline"><strong>{name}</strong></h3>
          <span>{convertDate.toLocaleDateString('en-us', {weekday: 'short', month: 'short', day: 'numeric'})}</span>
          <span>{`$${coverPrice.toFixed(2)}`}</span>
        </div>
      </div>
    );
  }

export default NextEvent
