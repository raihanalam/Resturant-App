import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav = () => {
    this.setState((prevState) => ({
      isNavOpen: !prevState.isNavOpen,
    }));
  };

  render() {
    return (
      <div className='App'>
        <Navbar dark color='dark' expand='sm'>
          <div className='container d-flex align-items-center justify-content-between'>
            <NavbarBrand href='/'>Cafe-420</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <Link to='/' className='nav-link'>
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to='/menu' className='nav-link'>
                    Menu
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to='/about' className='nav-link'>
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to='/contact' className='nav-link'>
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
