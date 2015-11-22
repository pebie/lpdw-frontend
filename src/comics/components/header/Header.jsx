/**
* Created by Pebie on 22/09/15.
*/

import './header.scss';

import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <span className="header-text">Comics book application</span>
        <span className="header-text header-text--right">lpdw.</span>
      </div>
    );
  }
}
