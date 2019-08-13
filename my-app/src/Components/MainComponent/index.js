import React, { Component } from 'react';
import styled from 'styled-components';

const Test = styled.p`
color:red;
`

class MainComponent extends Component {
    render() {
      return (
          <Test>Text</Test>
      )
    }
}

export default MainComponent