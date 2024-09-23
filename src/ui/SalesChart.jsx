import styled from "styled-components";
import { H2 } from "./Headers";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Container = styled.div`
  margin-top: 20px;
  background-color: var(--accient-bg-color);
  border: 1px solid var(--secondary-border-color);
  border-radius: 12px;
  padding: 32px;
  width: 100%;
  height: 400px;
`;

const ChartWrapper = styled.div`
  margin-top: 30px;
`;

function SalesChart({ placedOrdersByDate }) {
  return (
    <Container>
      <H2>
        Sales from {placedOrdersByDate.at(0).month} to{" "}
        {placedOrdersByDate.at(-1).month}
      </H2>
      <ChartWrapper>
        <ResponsiveContainer height={300} width="100%">
          <AreaChart data={placedOrdersByDate}>
            <XAxis
              dataKey="month"
              tick={{ fill: "var(--primary-font-color)" }}
              tickLine={{ stroke: "var(--primary-font-color)" }}
            />
            <YAxis
              dataKey="amount"
              tick={{ fill: "var(--primary-font-color)" }}
              tickLine={{ stroke: "var(--primary-font-color)" }}
            />
            <CartesianGrid strokeDasharray="4" strokeOpacity="0.2" />
            <Tooltip
              itemStyle={{ color: "#000" }}
              contentStyle={{
                backgroundColor: "var(--accient-bg-color)",
                textTransform: "capitalize",
              }}
            />
            <Area
              dataKey="amount"
              type="monotone"
              stroke={"var(--secondary-bg-hover-color)"}
              fill={"#2186f8"}
              strokeWidth={2}
              name="Total Placed Orders"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Container>
  );
}

export default SalesChart;
