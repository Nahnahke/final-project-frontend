import React, { useState } from 'react';
import styled from 'styled-components';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Navbar>
      <Logo>Logo</Logo>
      <Links>
        <li><a href="#">FOR SALE</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </Links>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0f0f0;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-left: 1rem; /* Adjust margin for logo positioning */
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  margin-right: auto; /* Moves the links to the left */

  li {
    margin-right: 10px;

    a {
      text-decoration: none;
      color: #000;
    }
  }
`;