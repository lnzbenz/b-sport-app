import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    import Logo from '../Login/logo.png'
    import auth from '../../service/index'
    import "./Header.css"
export default class Header extends Component {
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
      logout = e => {
        auth.clearToken();
        this.props.history.push("/");
      };
    render() {
        return (
            <div>
            <Navbar className="bg-header"  expand="md">
              <NavbarBrand >BSPORT</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">สินค้าแนะนำ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">รองเท้า</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">สินค้าอื่นๆ</NavLink>
                  </NavItem>
                  <NavItem>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">ติดต่อเรา</NavLink>
                  </NavItem>
                  
                  <NavItem>
                    <NavLink href="/" onClick={this.logout} >LogOut</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            
          </div>
        )
    }
}
