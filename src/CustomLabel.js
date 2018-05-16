import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CustomLabel extends Component {
  render() {
    return (
      <g>
        <rect
          className="labelBox"
          x={this.props.x - 50}
          y={this.props.y - 20}
          width="100"
          height="25"
          fill="#fff"
          stroke="#333"
        />
        <text
          x={this.props.x + 16 - 50}
          y={this.props.y + 16 - 20}
          fontFamily="ProximaNovaSemiBold"
          fontSize="12"
          fill="#333"
        >
          {this.props.text}
        </text>
      </g>
    );
  }
}
