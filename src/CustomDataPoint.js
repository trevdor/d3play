import React, { Component } from "react";
import PropTypes from "prop-types";

import "./CustomDataPoint.css";

const genFeatureId = () => `F${Math.round(1000 + Math.random() * 9000)}`;
const randColor = () =>
  "#" + (100000 + Math.floor(Math.random() * 16777215)).toString(16);

export default class CustomDataPoint extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    planEst: PropTypes.number.isRequired,
    refinedEst: PropTypes.number.isRequired
  };

  state = {
    color: randColor()
  };

  render() {
    return (
      <g>
        <defs>
          <pattern
            id="diagonalHatch"
            width="10"
            height="10"
            patternTransform="rotate(45 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="10" height="10" fill="#ffffff" />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="10"
              style={{
                stroke: this.state.color,
                strokeWidth: 1
              }}
            />
          </pattern>
        </defs>

        <rect
          className="mainRect"
          x={this.props.x}
          y={this.props.y}
          width={80 + Math.random() * 300}
          height="30"
        />
        <rect
          className="color"
          fill={this.state.color}
          stroke={this.state.color}
          x={this.props.x}
          y={this.props.y}
          width="8"
          height="30"
        />
        <text
          className="artifactName"
          x={this.props.x + 16}
          y={this.props.y + 20}
          fill={this.state.color}
        >
          {genFeatureId()}
        </text>
      </g>
    );
  }
}
