import { useState } from "react";
import { useOrders } from "../services/useOrders";
import { H1 } from "../ui/Headers";
import OrdersHeader from "../ui/OrdersHeader";
import OrdersRow from "../ui/OrdersRow";
import { SearchInput } from "../ui/Search";
import Spinner from "../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import OrdersFooter from "../ui/OrdersFooter";
import NotFound from "../ui/NotFound";
import styled from "styled-components";
import SingleOrder from "../ui/SingleOrder";

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Wrapper = styled.div`
  width: 1150px;
`;

function Orders() {
  const [isOpen, setIsOpen] = useState("orders");
  const [isEditing, setIsEditing] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currPage, setCurrPage] = useState(1);

  const { orders, ordersCount, isLoading } = useOrders();

  function handleChange(key, value) {
    searchParams.set(key, value);
    if (searchParams.get("page")) {
      searchParams.delete("page");
    }
    if (!value) searchParams.delete(key);
    setSearchParams(searchParams);
    setCurrPage(1);
  }

  return (
    <>
      {isOpen === "orders" && (
        <Wrapper>
          <H1>Orders</H1>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Search by email..."
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <SearchInput
              type="text"
              placeholder="Search by last name..."
              onChange={(e) => handleChange("last_name", e.target.value)}
            />
          </SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search by id..."
            onChange={(e) => handleChange("id", e.target.value)}
          />
          {isLoading ? (
            <Spinner />
          ) : ordersCount && orders.length > 0 ? (
            <>
              <OrdersHeader />
              {orders.map((order) => (
                <OrdersRow
                  key={order.id}
                  order={order}
                  setIsOpen={setIsOpen}
                  setIsEditing={setIsEditing}
                />
              ))}
              <OrdersFooter
                ordersCount={ordersCount}
                setCurrPage={setCurrPage}
                currPage={currPage}
              />
            </>
          ) : (
            <NotFound />
          )}
        </Wrapper>
      )}
      {isOpen === "singleOrder" && (
        <SingleOrder id={isEditing} setIsOpen={setIsOpen} />
      )}
    </>
  );
}

export default Orders;
