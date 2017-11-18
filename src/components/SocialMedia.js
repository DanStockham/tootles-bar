import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

/**
 * SocialMedia
 */
export default class SocialMedia extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="content-box c-social-media">
        <h3>Social Media</h3>
        <ul>
          <li><FontAwesome className="social-media__icons" name="facebook" style={ { background: "#415e9b"} } /></li>
          <li><FontAwesome className="social-media__icons" name="instagram" style={ { background: "#437197"} } /></li>
          <li><FontAwesome className="social-media__icons" name="twitter" style={ {background: "#1ab2e8"} }/></li>
        </ul>
      </div>
    );
  }
}
