import styled from "styled-components";

const WrapperInStock = styled.div`
  margin: 0 20px;
  background-color: #067206;
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  width: 60px;
  padding: 6px 12px;
  display: flex;
  justify-content: center;
`;
const WrapperOutOfStock = styled.div`
  margin: 0 20px;
  background-color: #641717;
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  width: 60px;
  padding: 6px 12px;
  display: flex;
  justify-content: center;
`;

function Status({ inventory, featured }) {
  return (
    <>
      {inventory > 0 && <WrapperInStock>{inventory}</WrapperInStock>}
      {inventory === 0 && <WrapperOutOfStock>{inventory}</WrapperOutOfStock>}
      {featured === true && <WrapperInStock>Yes</WrapperInStock>}
      {featured === false && <WrapperOutOfStock>No</WrapperOutOfStock>}
    </>
  );
}

export default Status;
