import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Artifact.css";

export default class Artifact extends Component {
  state = { width: 100 };

  static propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    planEst: PropTypes.number.isRequired,
    refinedEst: PropTypes.number.isRequired
  };

  render() {
    return (
      <g>
        <rect
          className="estimator"
          height="6"
          width={this.state.width / 35 * this.props.refinedEst}
          rx="2"
          x="0"
          y="13"
        />
        <rect
          className="main"
          x="0"
          y="0"
          width={this.state.width / 35 * this.props.planEst}
          height="15"
          rx="2"
        />
        <text x="16" y="10" fontFamily="ProximaNovaSemiBold" fontSize="10">
          {this.props.name}
        </text>
        <rect
          className="color"
          fill={this.props.color}
          stroke={this.props.color}
          x="0"
          y="0"
          width="8"
          height="38"
        />
      </g>
    );
  }
}
