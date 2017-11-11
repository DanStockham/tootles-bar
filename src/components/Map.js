import React, { Component, PropTypes } from 'react';

/**
 * Map
 */
export class Map extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>MY COMPONENT</div>
    );
  }
}

Map.propTypes = {
  prop: PropTypes.type.isRequired
}

export default Map;
