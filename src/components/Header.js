import React from 'react';
import styled from 'styled-components';

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
    background-color: white;

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

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <div className="bar">
          <div className="logo">Dashboard</div>
          <div className="nav-items">
            <div className="item"><a>Users</a></div>
            <div className="item"><a>Posts</a></div>
          </div>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
