import React, { Component, PropTypes } from 'react';

/**
 * Pagination
 */
export default class Pagination extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="pagination">
        <span>1-10 of 10</span>
      </div>
    );
  }
}