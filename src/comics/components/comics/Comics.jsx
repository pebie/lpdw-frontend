import _                    from 'lodash';
import React, { Component } from 'react';
import ComicsItem           from './ComicsItem';

import './comics.scss';

export default class Comics extends Component {

  constructor(props){
    super(props);
    this.state = {
      comics: []
    }
  }

  componentWillMount() {
    this.fetchComics();
  }

  componentWillReceiveProps(nextProps, nextState) {

  }

  fetchComics() {
    fetch('/api/comics')
    .then((response)=> {

        return response.json();
    })
    .then((response)=> {
      if(response.error){
        throw new Error(response.error.message);
      }else{
        this.setState({
          comics: response
        })
      }
    });
  }

  getThumbnail(comic, key) {
    let index = parseInt(key) + 1;
    let serie = comic.serie.replace(' ', '_').toLowerCase();

    try{
      require('../../../assets/images/' + serie + '/' + index + '.jpg');
    } catch (error) {
      console.warn("Image " + '../../../assets/images/' + serie + '/' + index + '.jpg' + " couldn't be load, use dummy instead");

      return 'http://placehold.it/251x353'
    }
    return require('../../../assets/images/' + serie + '/' + index + '.jpg');
  }

  renderItems() {
    let items = this.state.comics.map((comic,key)=> {

      return <ComicsItem key={key} className="comics__items" comic={comic} imageUrl={this.getThumbnail(comic, key)}/>
    })

    return items;
  }

  render() {

    return (
      <div className="comics layout">
          { this.renderItems() }
      </div>
    );
  }
}
