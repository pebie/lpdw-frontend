import React, { Component, PropTypes } from 'react';

class ComicsItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      over: false
    }
  }

  //Using state to change component behavior
  toggleState() {
    this.setState({
      over : !this.state.over
    });
  }

  render() {

    let { className, imageUrl, comic } = this.props;
    let overClass = this.state.over ? 'overlay overlay--over' : 'overlay';

    return (
      <div className={className}
           onMouseOver={this.toggleState.bind(this)}
           onMouseOut={this.toggleState.bind(this)}>
        <a href="#">
           <img src={imageUrl}/>
           <div className={overClass}>
             <p>{comic.name}</p>
             <p className="serie">{comic.serie}</p>
             <p className="page-count">{comic.pageCount} pages</p>
           </div>
        </a>
      </div>
    );
  }
}

//Using props to pass data between component
ComicsItem.propTypes = {
    imageUrl:    PropTypes.string.isRequired,
    comic:       PropTypes.string
};

export default ComicsItem;
