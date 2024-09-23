import styled from "styled-components";
import { H1 } from "../ui/Headers";
import Stat from "../ui/Stat";
import { IoCartOutline } from "react-icons/io5";
import { FaCashRegister, FaMoneyBillWave } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import Spinner from "../ui/Spinner";
import { useOrdersStats } from "../services/useOrdersStats";
import priceFormater from "../helpers/priceFormater";
import ChartAndTopStats from "../ui/ChartAndTopStats";
import SalesChart from "../ui/SalesChart";

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1150px;
`;

function Home() {
  // const {
  //   allOrdersTotalProducts,
  //   ordersNumber,
  //   allOrdersTotal,
  //   isLoading: isLoadingOrders,
  //   salesBySubcategory,
  //   topSellingProducts,
  //   placedOrdersByDate,
  // } = useOrdersStats();

  // if (isLoadingOrders) return <Spinner />;

  // return (
  //   <>
  //     <H1>Home</H1>
  //     <Stats>
  //       <Stat
  //         title="placed orders"
  //         icon={<IoCartOutline />}
  //         value={ordersNumber}
  //         color="#0552a8"
  //       />
  //       <Stat
  //         title="sales"
  //         icon={<FaMoneyBillWave />}
  //         value={`$ ${priceFormater(allOrdersTotal)}`}
  //         color="#365F36"
  //       />
  //       <Stat
  //         title="average monthly sales"
  //         icon={<GiTakeMyMoney />}
  //         value={`$ ${priceFormater(Math.ceil(allOrdersTotal / 12))}`}
  //         color="#294747"
  //       />
  //       <Stat
  //         title="sold products"
  //         icon={<FaCashRegister />}
  //         value={allOrdersTotalProducts}
  //         color="#5B3F28"
  //       />
  //     </Stats>
  //     <ChartAndTopStats
  //       salesBySubcategory={salesBySubcategory}
  //       topSellingProducts={topSellingProducts}
  //     />
  //     <SalesChart placedOrdersByDate={placedOrdersByDate} />
  //   </>
  // );
  return <H1>Home</H1>;
}

export default Home;
