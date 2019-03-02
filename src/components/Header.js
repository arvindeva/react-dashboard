import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div.attrs({
  className: 'ui top fixed menu header'
})``

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <div className="item logo">Dashboard</div>
        <div className="item right">Admin</div>
      </StyledHeader>
    );
  }
}

export default Header;
