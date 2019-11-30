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
                  <NavLink href="/overview">หน้าหลัก</NavLink>
                  </NavItem>
                  
                  <NavItem>
                    <NavLink href="/favorite">สินค้าที่ชื่นชอบ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/orderCompleted">สินค้าที่ทำการสั่งซื้อแล้ว</NavLink>
                  </NavItem>
                
                  <NavItem>
                    <NavLink href="/contact/">ติดต่อเรา</NavLink>
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
