import React, { Component, PropTypes } from 'react'

class Square extends Component {

  render() {
    var style = {
      height: 150,
      backgroundColor: this.props.color
    };

    return (
      <div style={style}>

      </div>
    )
  }
}

export default Square;
