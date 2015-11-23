import React, { Component } from 'react';
import ComicsItem           from './ComicsItem';

import './comics.scss';

export default class Comics extends Component {
  render() {
    return (
      <div className="comics layout">
          <ComicsItem className="comics__items" imageUrl={require('../../../assets/images/dc_renaissance/01.jpg')}/>
      </div>
    );
  }
}
