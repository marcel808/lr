import React, { Component, PropTypes } from 'react'

import Square from './Square'
import Label from './Label'

class Card extends Component {

  render() {
    var style = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: "#FFF",
      filter: "drop-shadow(0px 0px 5px #666)"
    };

    return (
        <div style={style}>
            <Square color={this.props.color}/>
            <Label color={this.props.color}/>
        </div>
    )
  }
}

export default Card;
