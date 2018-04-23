import React, { Component, PropTypes } from 'react';
import Link from 'gatsby-link';

/**
 * Pagination
 */
const Pagination = (props) => { // eslint-disable-line react/prefer-stateless-function
  const { index, first, last, pageCount, showCount } = props.paginateControls;
  const lastIndex = !last ? `${(index - 1)*5+5} of ${showCount}` : `${showCount} of ${showCount}`;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();

  return (
      <div className="pagination">
        { !first ? <Link to={previousUrl}>{`<<`}</Link> : null }
        <span>{`${1 + ((index - 1)*5)} - ${lastIndex}` }</span>
        { !last ? <Link to={nextUrl}>{`>>`}</Link> : null }
      </div>
    );
}

export default Pagination
