import styled from "styled-components";
import { MdDelete } from "react-icons/md";
import { useDeleteProductImage } from "../services/useDeleteProductImage";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`
  padding: 5px;
  max-width: 140px;
  max-height: 140px;
`;

const StyledButton = styled.span`
  display: block;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: 999;
  font-size: 20px;
  top: 0px;
  right: 0px;
  padding: 7px;
  background-color: transparent;
  border: none;
  outline: none;
  color: #aaa;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    color: #ddd;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 20px 10px 0;
  justify-content: center;
  align-items: center;
  border: 1px solid #434545;
  min-width: 100px;
  max-width: 150px;
  height: 150px;
  position: relative;

  &:hover ${StyledButton} {
    visibility: visible;
    opacity: 1;
  }
`;

function ProductImages({ isLoadingProduct, product }) {
  const { images } = product;
  const { isPending, deleteProductImage } = useDeleteProductImage();
  return (
    <>
      <Wrapper>
        {images.map((image) => (
          <Container key={image.cloudinary_image_id}>
            <StyledButton
              title="Delete"
              disabled={isPending}
              onClick={() => deleteProductImage({ product, image })}
            >
              <MdDelete />
            </StyledButton>
            <Image src={image.image_url} />
          </Container>
        ))}
      </Wrapper>
    </>
  );
}

export default ProductImages;
