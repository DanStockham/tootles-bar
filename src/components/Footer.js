import React, { Component } from 'react';

/**
 * Footer
 */
export class Footer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <div className="footer-about">
            <p className="footer-about__headline">ABOUT</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur ducimus beatae ab quod, sapiente at provident odit consequuntur quis dolorum architecto cupiditate sunt? Voluptas cumque officia quisquam non aliquid.</p>
          </div>
          {/* &copy;2017 Tootle's Pumpkin Inn */}
        </div>
      </footer>
    );
  }
}

export default Footer;
