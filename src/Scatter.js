import React from "react";

import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryBrushContainer,
  VictoryAxis,
  VictoryTheme,
  VictoryScatter
} from "victory";
import Artifact from "./Artifact";
import Button from "mineral-ui/Button";
import IconCloud from "mineral-ui-icons/IconCloud";
import IconAirplanemodeInactive from "mineral-ui-icons/IconAirplanemodeInactive";
import IconBatteryUnknown from "mineral-ui-icons/IconBatteryUnknown";

class CatPoint extends React.Component {
  render() {
    const { x, y, datum } = this.props;
    console.log(x, y);
    const cat = datum._y >= 0 ? "😻" : "😹";
    return (
      <text x={x} y={y} fontSize={30}>
        {cat}
      </text>
    );
  }
}

class BatPoint extends React.Component {
  render() {
    const { x, y, datum } = this.props;
    return <IconBatteryUnknown x={x} y={y} height="16px" size="small" />;
  }
}

class PlanePoint extends React.Component {
  render() {
    const { x, y, datum } = this.props;
    return <IconAirplanemodeInactive x={x} y={y} height="16px" size="small" />;
  }
}
const ArtifactPoint = props => {
  return (
    <g>
      <rect className="estimator" height="6" width={100} rx="2" x="0" y="13" />
      <rect className="main" x="0" y="0" width={127} height="15" rx="2" />
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
};

const genFeatureId = () => `F${Math.round(1000 + Math.random() * 9000)}`;

class BtnPoint extends React.Component {
  render() {
    const icon = <IconCloud />;
    const { x, y, datum } = this.props;

    return (
      <Artifact
        x={x}
        y={y}
        color="#50b2ef"
        name={genFeatureId()}
        planEst={21}
        refinedEst={26}
      />
    );
  }
}

export default class Scatter extends React.Component {
  render() {
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        domain={{ x: [0, 5], y: [0, 7] }}
      >
        <VictoryScatter
          style={{ data: { fill: "#c43a31" } }}
          size={7}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}
          dataComponent={<BatPoint />}
        />
      </VictoryChart>
    );
  }
}
