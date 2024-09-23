import styled from "styled-components";
import { H2 } from "./Headers";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  margin-top: 20px;
  background-color: var(--accient-bg-color);
  border: 1px solid var(--secondary-border-color);
  border-radius: 12px;
  padding: 32px;
  width: 565px;
  height: 400px;
`;

const ChartWrapper = styled.div`
  margin-top: 40px;
  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const Row = styled.div`
  display: grid;
  padding: 20px 0;
  grid-template-columns: 4fr 2fr;
  width: 100%;
  border-bottom: 1px solid var(--primary-border-color);
`;

const RowsWrapper = styled.div`
  margin-top: 30px;
`;

const NameContainer = styled.div`
  color: var(--primary-font-color);
  text-transform: capitalize;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  color: var(--primary-font-color);
`;

function ChartAndTopStats({ salesBySubcategory, topSellingProducts }) {
  return (
    <Wrapper>
      <Box>
        <H2>Top Selling Products</H2>
        <RowsWrapper>
          {topSellingProducts.map((product) => (
            <Row key={product.name}>
              <NameContainer>{product.name}</NameContainer>
              <AmountContainer>{product.value}</AmountContainer>
            </Row>
          ))}
        </RowsWrapper>
      </Box>
      <Box>
        <H2>Sales by subcategory</H2>
        <ChartWrapper>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={salesBySubcategory}
                nameKey="subcategory"
                dataKey="value"
                innerRadius={85}
                outerRadius={110}
                cx="40%"
                cy="50%"
                paddingAngle={3}
              >
                {salesBySubcategory.map((subcategory) => (
                  <Cell
                    key={subcategory.color}
                    stroke={subcategory.color}
                    fill={subcategory.color}
                  />
                ))}
              </Pie>
              <Tooltip
                itemStyle={{ color: "#000" }}
                contentStyle={{
                  backgroundColor: "var(--accient-bg-color)",
                  textTransform: "capitalize",
                }}
              />
              <Legend
                verticalAlign="middle"
                align="right"
                width="30%"
                layout="vertical"
                iconSize={15}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </Box>
    </Wrapper>
  );
}

export default ChartAndTopStats;
