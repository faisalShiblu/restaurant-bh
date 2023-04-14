import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    navToggle = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    };

    render() {
        return (
            <div>
                <Navbar dark color="dark" expand='sm'>
                    <div className='container'>
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">Restro</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link to='/h' className='nav-link'>Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/m' className='nav-link'>Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/a' className='nav-link'>About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/c' className='nav-link'>Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
};

export default Navigation;