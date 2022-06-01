import React, { Component } from 'react'
import styled from 'styled-components';

const NavBar = styled.nav`
width: 100%;
position: absolute;
top: 0;
left: 0;
background: #FFFFFF;
height: 40px;
z-index:1;



`

const Ul = styled.p`

// background: red;
display:flex;
list-style: none;
flex-direction: row;
width: 15%;
//margin: 4px;
justify-content: space-between;
float: left;
    margin-left: 28px;
    margin-top: -5;
    
//align-items: center;

     


`


export default class Navigation extends Component {
  render() {
    return (
      <NavBar>
          <header>
          <Ul>
              <li>Women</li>
              <li>Men</li>
              <li>Kids</li>
          </Ul>
          </header>
      </NavBar>
    )
  }
}
