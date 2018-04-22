import React, { Component, PropTypes } from 'react';
import Link from 'gatsby-link';

/**
 * Pagination
 */
const Pagination = (props) => { // eslint-disable-line react/prefer-stateless-function
  const { index, first, last, pageCount } = props.paginateControls;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
      <div className="pagination">
        { !first ? <Link to={previousUrl}>{`<<`}</Link> : null }
        <span>1-10 of 10</span>
        { !last ? <Link to={nextUrl}>{`>>`}</Link> : null }
      </div>
    );
}

export default Pagination
