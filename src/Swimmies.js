import React from "react";
import {
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryBrushContainer,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLine,
  VictoryPortal,
  VictoryScatter,
  VictoryStack,
  VictoryTheme,
  VictoryTooltip,
  VictoryZoomContainer
} from "victory";
import CustomDataPoint from "./CustomDataPoint";
import CustomLabel from "./CustomLabel";

const getRandNum = (lower, upper) =>
  (0 || lower) + Math.floor(Math.random() * (upper || 4));

const getRandData = qty => {
  let data = [];

  for (let i = 0; i < qty; i++) {
    data.push({ x: getRandNum(0, 4), y: getRandNum(0, 4) });
  }
  return data;
};

export default class Swimmies extends React.Component {
  constructor() {
    super();
    this.state = {
      zoomDomain: {
        x: [new Date(2017, 10, 1), new Date(2018, 6, 1)],
        y: [-250, 0]
      }
    };
  }

  handleZoom(domain) {
    this.setState({ zoomDomain: { x: domain.x } });
  }

  render() {
    return (
      <div>
        {/*<VictoryChart
          float="left"
          paddingRight={50}
          width={200}
          height={600}
          scale={{ y: 'linear' }}
          containerComponent={
            <VictoryZoomContainer
              allowZoom={false}
              zoomDimension="y"
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
          <VictoryAxis
            style={{
              axis: { stroke: 'none' },
              grid: { stroke: 'none' },
              ticks: { stroke: 'none' },
              tickLabels: { fill: 'none' },
            }}
          />
          <VictoryStack colorScale={['#d6f1fc', '#FFF', '#d6f1fc']}>
            <VictoryArea
              data={[
                { x: 0, y: 0 },
                { x: 10, y: 0 },
                { x: 10, y: -100 },
                { x: 0, y: -100 },
              ]}
              x="key"
              y="b"
            />
            <VictoryArea
              data={[
                { x: 0, y: -100 },
                { x: 10, y: -100 },
                { x: 10, y: -200 },
                { x: 0, y: -200 },
              ]}
              x="key"
              y="b"
            />
          </VictoryStack>
            </VictoryChart>*/}
        <VictoryChart
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={this.state.zoomDomain}
              onZoomDomainChange={this.handleZoom.bind(this)}
            />
          }
          height={600}
          scale={{ x: "time", y: "linear" }}
          width={800}
        >
          <VictoryAxis fixLabelOverlap />
          <VictoryLine
            data={[
              { x: new Date(2012, 10, 1), y: -100 },
              { x: new Date(2020, 6, 1), y: -100 }
            ]}
          />
          <VictoryScatter
            data={[
              { x: new Date(2017, 12, 25), y: -40 },
              { x: new Date(2018, 1, 15), y: -20 },
              { x: new Date(2017, 10, 16), y: -105 },
              { x: new Date(2018, 2, 14), y: -60 },
              { x: new Date(2018, 5, 5), y: -80 }
            ]}
            dataComponent={<CustomDataPoint />}
          />
          <VictoryScatter
            data={[
              { x: new Date(2017, 11, 6), y: -140 },
              { x: new Date(2018, 1, 12), y: -120 },
              { x: new Date(2018, 2, 14), y: -180 },
              { x: new Date(2018, 4, 7), y: -160 }
            ]}
            dataComponent={<CustomDataPoint />}
          />
          <VictoryLine
            data={[
              { x: new Date(2012, 10, 1), y: -200 },
              { x: new Date(2020, 6, 1), y: -200 }
            ]}
          />
          <VictoryScatter
            data={[
              { x: new Date(2017, 11, 14), y: -205 },
              { x: new Date(2018, 3, 2), y: -225 }
            ]}
            dataComponent={<CustomDataPoint />}
          />
        </VictoryChart>
        <VictoryChart
          padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
          width={800}
          height={100}
          scale={{ x: "time" }}
          containerComponent={
            <VictoryBrushContainer
              brushDimension="x"
              brushDomain={this.state.zoomDomain}
              onBrushDomainChange={this.handleZoom.bind(this)}
            />
          }
        >
          <VictoryAxis />
          <VictoryLine
            style={{
              data: { stroke: "#d6f1fc" }
            }}
            data={[
              { x: new Date(2017, 10, 1), y: 250 },
              { x: new Date(2018, 6, 1), y: 250 }
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}

// <VictoryPortal>
// <VictoryLine
//   data={[{ x: 40, y: 0 }, { x: 40, y: 12, label: 'Today' }]}
//   labels={d => d.label}
//   style={{
//     data: {
//       strokeDasharray: 8,
//       strokeDashoffset: 4,
//     },
//     parent: { border: '1px solid #ccc' },
//   }}
//   labelComponent={<CustomLabel dy="-20" />}
// />
// </VictoryPortal>

// colorScale={['#d6f1fc', '#FFF', '#d6f1fc']}

// <VictoryAxis
//   style={{
//     axis: { stroke: '#000' },
//     // ticks: { stroke: 'none' },
//     tickLabels: { fill: 'none' },
//     grid: { stroke: '#eee' },
//   }}
//   domain={[0, 250]}
//   range={[0, -250]}
//   offsetY={25}
// />

// <VictoryLine
// data={[{ x: 40, y: 0 }, { x: 40, y: -250, label: 'Today' }]}
// labels={d => d.label}
// style={{
//   data: {
//     strokeDasharray: 8,
//     strokeDashoffset: 4,
//   },
//   parent: { border: '1px solid #ccc' },
// }}
// labelComponent={<CustomLabel dy="-20" />}
// />
