import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

/**
 * SocialMedia
 */
export default class SocialMedia extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ul>
          <li><FontAwesome name="facebook" /></li>
          <li><FontAwesome name="instagram" /></li>
          <li><FontAwesome name="twitter" /></li>
        </ul>
      </div>
    );
  }
}
