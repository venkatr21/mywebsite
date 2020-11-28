import React, {Component} from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText } from 'reactstrap';
class MyNav extends Component{
  constructor(props){
    super(props);
    this.state={
      isOpen : false
    };
  }
  toggle() {
    this.setState({
      isOpen : !this.state.isOpen
    });
  }
    review(){
      this.setState({
        val1: this.state.val1+1
      });
    }
  render() {
    return(
      <div id="navhome">
      <Navbar width="40%" color="light" light expand="md">
        <NavbarBrand href="/">Menu</NavbarBrand>
        <NavbarToggler onClick={()=>this.toggle()} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#education">Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contests">Others</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Made with ReactJS  <img src='https://cdn.worldvectorlogo.com/logos/react.svg' height='30px' width='30px' /></NavbarText>
        </Collapse>
      </Navbar>
    </div>
);
}
}
export default MyNav;
