import { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
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

  color: ${(props) => (props.active === "true" ? "#065ec0" : "#aaa")};
  font-weight: ${(props) => (props.active === "true" ? "700" : "300")};
  transition: all linear 0.2s;
  &:hover {
    color: ${(props) => (props.active === "true" ? "#065ec0" : "#fff")};
  }
`;

function ReviewsPagination({ currPage, setCurrPage, reviewsCount }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const limit = 4;
  const pagesCount = Math.floor(
    reviewsCount % limit === 0 ? reviewsCount / limit : reviewsCount / limit + 1
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
    <Wrapper>
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
    </Wrapper>
  );
}

export default ReviewsPagination;
