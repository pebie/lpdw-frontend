import React, { Component } from 'react';
import Header               from './header/Header';
import Footer               from './footer/Footer';
import Comics               from './comics/Comics';

import './root.scss';

export default class Root extends Component {
  render() {
    return (
      <div>
        <Header />
        <Comics />
        <Footer />
      </div>
    );
  }
}
