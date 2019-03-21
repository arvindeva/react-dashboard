import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
  .bar {
    z-index: 1;
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    background-color: #008080;

    a {
      color: white;
    }

    .nav-items {
      display: flex;
      margin-left: auto;
      .item {
        margin-left: 20px;
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <div className="logo">
          <Link to="/">
            <h1>Dashboard</h1>
          </Link>
        </div>
        <div className="nav-items">
          <div className="item">
            <Link to="/about">About</Link>
          </div>
          <div className="item">
            <a
              href="https://github.com/arvindeva/react-dashboard"
              target="blank"
            >
              <i className="github icon large" />
            </a>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
