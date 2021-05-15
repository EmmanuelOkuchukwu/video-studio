import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AuthService } from '../../services/authService';
import { useHistory } from 'react-router-dom';

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const userInfo = AuthService.getUser();
    const history = useHistory();
    function handleExpand(evt) {
        evt.preventDefault();
        setIsExpanded(!isExpanded);
        console.log(isExpanded);
    }
    function handleSignout(evt) {
        evt.preventDefault();
        AuthService.onSignout();
        history.push('/')
    }
    return (
        <NavContainer>
            <div className="logo-container">
                <h1>PCMS</h1>
            </div>
            <nav className="main-nav">
                <i className="fa fa-bars" aria-hidden="true" onClick={handleExpand} />
                <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                    {!userInfo ? (
                        ""
                    ) : (
                        <li className="name-user">Signed in as: <NavLink to="#">{userInfo.user_nicename}</NavLink></li>
                    )}
                    <NavLink className="link" to="/#">
                        <li>About</li>
                    </NavLink>
                    {userInfo && <NavLink className="link" to="/#" onClick={handleSignout}>
                        <li>Signout</li>
                    </NavLink> || ""}
                </ul>
            </nav>
        </NavContainer>
    );
};

const NavContainer = styled.header`
  height: 60px;
  background-color: ${props => props.theme.MainThemeColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  //position: fixed;
  //width: 100%;
  //top: 0;
  h1 {
    margin: 0 10px;
  }
  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }
  nav {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      li {
        margin: 0 10px;
      }
    }
  }
  .name-user {
    color: rgba(0,0,0,.5);
  }
  .link {
    text-decoration: none;
    padding: 5px;
    &:hover {
      background-color: #fff;
      border-radius: 4px;
      transition: all 0.2s ease-in-out;
    }
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px -5px;
      a {
        padding: 20px 0;
      }
    }
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0 0;
        width: 100%;
      }
    }
  }
`
