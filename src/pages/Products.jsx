import { useState } from "react";
import { useProducts } from "../services/useProducts";
import { H1 } from "../ui/Headers";
import ProductsRow from "../ui/ProductsRow";
import Spinner from "../ui/Spinner";
import ProductForm from "../ui/ProductForm";
import Button from "../ui/Button";
import ProductImages from "../ui/ProductImages";
import ProductsHeader from "../ui/ProductsHeader";
import ProductsFooter from "../ui/ProductsFooter";
import { useSearchParams } from "react-router-dom";
import { SearchInput } from "../ui/Search";
import NotFound from "../ui/NotFound";
import ChangeInventoryForm from "../ui/ChangeInventoryForm";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");

const Wrapper = styled.div`
  width: 1150px;
`;

function Products() {
  const [isOpen, setIsOpen] = useState("products");
  const [isEditing, setIsEditing] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [currPage, setCurrPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const {
    products,
    productsCount,
    isLoading: isLoadingProducts,
  } = useProducts();

  function handleChange(value) {
    searchParams.set("name", value);
    if (searchParams.get("page")) {
      searchParams.delete("page");
    }
    if (!value) searchParams.delete("name");
    setSearchParams(searchParams);
    setCurrPage(1);
  }

  return (
    <Wrapper>
      {isOpen === "products" && (
        <>
          <H1>Products</H1>
          <SearchInput
            type="text"
            placeholder="Search for products..."
            onChange={(e) => handleChange(e.target.value)}
          />
          {isLoadingProducts ? (
            <Spinner />
          ) : products.length > 0 ? (
            <>
              <ProductsHeader setCurrPage={setCurrPage} />
              {products &&
                products.map((product) => (
                  <ProductsRow
                    product={product}
                    key={product.id}
                    setIsOpen={setIsOpen}
                    setIsEditing={setIsEditing}
                    setModalIsOpen={setModalIsOpen}
                  />
                ))}

              <ProductsFooter
                productsCount={productsCount}
                currPage={currPage}
                setCurrPage={setCurrPage}
              />
            </>
          ) : (
            <NotFound />
          )}
          <Button
            onClick={() => {
              setIsOpen("form");
              setIsEditing("");
            }}
          >
            Add new product
          </Button>
        </>
      )}
      {isOpen === "form" && (
        <ProductForm setIsOpen={setIsOpen} isEditing={isEditing} />
      )}
      {isOpen === "images" && <ProductImages />}
      {modalIsOpen && (
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              content: {
                backgroundColor: "var(--primary-bg-color)",
                border: "1px solid var(--primary-border-color)",
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                transform: "translate(-50%, -50%)",
                overflowY: "hidden",
                overflowX: "hidden",
                width: "400px",
                padding: "16px 16px 4px 16px",
                minHeight: "150px",
              },
              overlay: {
                backgroundColor: "rgba(19, 23, 32, .9)",
              },
            }}
          >
            <ChangeInventoryForm
              setModalIsOpen={setModalIsOpen}
              isEditing={isEditing}
            />
          </Modal>
        </div>
      )}
    </Wrapper>
  );
}

export default Products;
