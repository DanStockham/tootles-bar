import React, { Component, PropTypes } from 'react';
import UpcomingEvents from '../components/UpcomingEvents'

/**
 * UpcomingEvents page
 */
const IndexPage = ({data, pathContext}) => { // eslint-disable-line react/prefer-stateless-function
  console.log(pathContext)

  return (
    <div>
      <UpcomingEvents pathContext={pathContext} />
    </div>
  );
}

export default IndexPage;


