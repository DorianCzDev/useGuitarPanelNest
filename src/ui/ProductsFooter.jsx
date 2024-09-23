import { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const TableFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--accient-bg-color);
  border-left: 1px solid var(--primary-border-color);
  border-right: 1px solid var(--primary-border-color);
  border-bottom: 1px solid var(--primary-border-color);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-right: 10px;

  height: 50px;
  width: 1150px;
`;

const Arrow = styled.span`
  font-size: 20px;
  cursor: pointer;
  margin-top: 4px;
  color: #aaa;
  transition: all linear 0.2s;
  &:hover {
    color: #fff;
  }
`;

const Li = styled.li`
  font-size: 18px;
  list-style: none;
  margin: 6px;
  cursor: pointer;

  color: ${(props) =>
    props.active === "true" ? "var(--secondary-bg-color)" : "#aaa"};
  font-weight: ${(props) => (props.active === "true" ? "700" : "300")};
  transition: all linear 0.2s;
  &:hover {
    color: ${(props) =>
      props.active === "true" ? "var(--secondary-bg-hover-color)" : "#fff"};
  }
`;

function ProductsFooter({ productsCount, setCurrPage, currPage }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const limit = 10;
  const pagesCount = Math.floor(
    productsCount % limit === 0
      ? productsCount / limit
      : productsCount / limit + 1
  );

  const pagesArray = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesArray.push(i);
  }

  useEffect(() => {
    searchParams.set("page", currPage);
    setSearchParams(searchParams);
  }, [currPage, searchParams, setSearchParams]);

  return (
    <TableFooter>
      {pagesArray.length > 1 && (
        <>
          <Arrow
            onClick={() => {
              setCurrPage(currPage > 1 ? currPage - 1 : currPage);
            }}
          >
            <IoIosArrowBack />
          </Arrow>
          {pagesArray.map((page) => (
            <Li
              key={page}
              onClick={() => {
                setCurrPage(page);
              }}
              active={currPage === page && "true"}
            >
              {page}
            </Li>
          ))}
          <Arrow
            onClick={() => {
              setCurrPage(currPage < pagesCount ? currPage + 1 : currPage);
            }}
          >
            <IoIosArrowForward />
          </Arrow>
        </>
      )}
    </TableFooter>
  );
}

export default ProductsFooter;
