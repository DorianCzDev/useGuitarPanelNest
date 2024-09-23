import {
  SingleOrderTableFooter,
  SingleOrderTableHeader,
  SingleOrderTableNumberSpan,
  SingleOrderTableRow,
  SingleOrderTableSpan,
} from "./SingleOrderTableUI";

import priceFormater from "../helpers/priceFormater";
import styled from "styled-components";

const TotalPriceSpan = styled.span`
  margin: auto 0;
  padding: 0 24px;
  font-weight: 300;
  font-size: 18px;
  padding-right: 40px;
`;

function SingleOrderTable({ orderProducts, total }) {
  return (
    <>
      <SingleOrderTableHeader>
        <SingleOrderTableSpan>Name</SingleOrderTableSpan>
        <SingleOrderTableSpan>Unit price</SingleOrderTableSpan>
        <SingleOrderTableSpan>Amount</SingleOrderTableSpan>
        <SingleOrderTableSpan>Total price</SingleOrderTableSpan>
      </SingleOrderTableHeader>
      {orderProducts.map((item) => (
        <SingleOrderTableRow key={item._id}>
          <SingleOrderTableSpan>{item.name}</SingleOrderTableSpan>
          <SingleOrderTableNumberSpan>
            {priceFormater(item.price)}
          </SingleOrderTableNumberSpan>
          <SingleOrderTableNumberSpan>
            {item.quantity}
          </SingleOrderTableNumberSpan>
          <SingleOrderTableNumberSpan>
            {priceFormater(item.price * item.quantity)}
          </SingleOrderTableNumberSpan>
        </SingleOrderTableRow>
      ))}
      <SingleOrderTableFooter>
        <TotalPriceSpan>Total price (with delivery cost):</TotalPriceSpan>
        <TotalPriceSpan> {priceFormater(total)} $</TotalPriceSpan>
      </SingleOrderTableFooter>
    </>
  );
}

export default SingleOrderTable;
