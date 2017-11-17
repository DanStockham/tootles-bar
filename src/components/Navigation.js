import { Component } from 'react';
import Link from 'gatsby-link'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import FontAwesome from 'react-fontawesome'

/**
 * ComponentName
 */
export default class Navigation extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="c-navigation navbar-dark bg-black" style={ {background: "black"} }>
          <NavbarToggler className="mx-auto c-navigation__collaspe" onClick={this.toggle}><FontAwesome name="bars"/>Navigation</NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto c-navigation__text-center" navbar fill>
              <NavItem className="c-navigation__navlink">
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem className="c-navigation__navlink">
                <Link to="/page-2">Page 2</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
