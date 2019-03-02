import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div.attrs({
  className: "ui top fixed menu"
})`

`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader className="header">
        <div className="item">Dashboard</div>
        <div className="item right">Admin</div>
      </StyledHeader>
    )
  }
}

export default Header;
