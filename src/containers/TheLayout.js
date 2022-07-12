
import React, { Component } from 'react';

import {
  TheContent,
  TheFooter,
  TheHeader
} from './index'

class TheLayout extends Component {

  render() {
    return (
      <>
        <TheHeader/>
        <TheContent/>
        <TheFooter/>
      </>
    )
  }
}

export default TheLayout;
