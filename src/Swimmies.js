import React from "react";
import {
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLine,
  VictoryStack,
  VictoryPortal,
  VictoryArea,
  VictoryScatter,
  VictoryTheme,
  VictoryTooltip,
  VictoryAxis
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
  render() {
    return (
      <div>
        <VictoryChart width={600} height={600}>
          <VictoryAxis
            style={{
              axis: { stroke: "none" },
              ticks: { stroke: "none" },
              tickLabels: { fill: "none" },
              grid: { stroke: "none" }
            }}
          />
          <VictoryPortal>
            <VictoryLine
              data={[{ x: 40, y: 0 }, { x: 40, y: 12, label: "Point in Time" }]}
              labels={d => d.label}
              style={{
                data: {
                  strokeDasharray: 8,
                  strokeDashoffset: 4
                },
                parent: { border: "1px solid #ccc" }
              }}
              labelComponent={<CustomLabel dy="-20" />}
            />
          </VictoryPortal>
          <VictoryStack colorScale={["#BAD6e5", "#FFF", "#BAD6e5"]}>
            <VictoryGroup
              data={[
                { x: 0, y: 4 },
                { x: 100, y: 4 },
                { x: 0, y: 0 },
                { x: 100, y: 0 }
              ]}
            >
              <VictoryArea />
              <VictoryPortal>
                <VictoryScatter dataComponent={<CustomDataPoint />} />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: 0, y: 4 },
                { x: 100, y: 4 },
                { x: 0, y: 0 },
                { x: 100, y: 0 }
              ]}
            >
              <VictoryArea />
              <VictoryPortal>
                <VictoryScatter dataComponent={<CustomDataPoint />} />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: 0, y: 4 },
                { x: 100, y: 4 },
                { x: 0, y: 0 },
                { x: 100, y: 0 }
              ]}
            >
              <VictoryArea />
              <VictoryPortal>
                <VictoryScatter dataComponent={<CustomDataPoint />} />
              </VictoryPortal>
            </VictoryGroup>
          </VictoryStack>
        </VictoryChart>
      </div>
    );
  }
}
