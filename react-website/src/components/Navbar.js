import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/index" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/Todo" activeStyle>
            Todo
          </NavLink>
          <NavLink to="/Countries" activeStyle>
            Countries
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavLink to="/sign-up" className="signup-link" activeStyle>
          Sign Up
        </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
