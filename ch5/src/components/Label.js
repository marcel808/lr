import React, { Component, PropTypes } from 'react'

class Label extends Component {

  render() {
    var style = {
       fontFamily: "sans-serif",
       fontWeight: "bold",
       padding: 13,
       margin: 0
    };

    return (
        <p style={style}>{this.props.color}</p>
    )
  }
}

export default Label;
