import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome'

/**
 * SocialMedia
 */
export default class SocialMedia extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="content-box c-social-media">
        <h3 className="content-box__header-tab">Social Media</h3>
        <ul>
          <li><a className="social-media__icons--links" target="_blank" href="https://www.facebook.com/tootlesmusicvenue/"><FontAwesome className="social-media__icons" name="facebook" style={ { background: "#415e9b"} } /></a></li>
          <li><a className="social-media__icons--links" target="_blank" href="https://www.instagram.com/explore/tags/tootlespumpkininn/"><FontAwesome className="social-media__icons" name="instagram" style={ { background: "#437197"} } /></a></li>
        </ul>
      </div>
    );
  }
}
