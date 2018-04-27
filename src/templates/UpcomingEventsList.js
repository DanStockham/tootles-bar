import React, { Component, PropTypes } from 'react';
import UpcomingEvents from '../components/UpcomingEvents';
import Helmet from 'react-helmet';

/**
 * UpcomingEvents/Index page
 */
const IndexPage = ({pathContext}) => { // eslint-disable-line react/prefer-stateless-function

  return (
    <div>
      <UpcomingEvents pathContext={pathContext} />
    </div>
  );
}

export default IndexPage;


