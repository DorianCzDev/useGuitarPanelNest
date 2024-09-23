import styled from "styled-components";
import { useDeliveries } from "../services/useDeliveries";
import DeliveriesHeader from "../ui/DeliveriesHeader";
import DeliveriesRow from "../ui/DeliveriesRow";
import { H1 } from "../ui/Headers";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";
import Modal from "react-modal";
import { useState } from "react";
import DeliveriesForm from "../ui/DeliveriesForm";

Modal.setAppElement("#root");

const TableFooter = styled.div`
  background-color: var(--accient-bg-color);
  border-left: 1px solid var(--primary-border-color);
  border-right: 1px solid var(--primary-border-color);
  border-bottom: 1px solid var(--primary-border-color);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  margin: 0 auto;
  height: 50px;
  width: 900px;
`;

const Wrapper = styled.div`
  width: 900px;
  margin: 100px auto 0 auto;
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
`;

function Deliveries() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState();
  const { deliveries, isLoading } = useDeliveries();
  return (
    <Wrapper>
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
                width: "600px",
                padding: "16px 16px 4px 16px",
                minHeight: "300px",
              },
              overlay: {
                backgroundColor: "rgba(19, 23, 32, .9)",
              },
            }}
          >
            <DeliveriesForm
              setModalIsOpen={setModalIsOpen}
              isEditing={isEditing}
            />
          </Modal>
        </div>
      )}
      <H1>Delivery Methods</H1>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <DeliveriesHeader />
          {deliveries.map((delivery) => (
            <DeliveriesRow
              key={delivery._id}
              delivery={delivery}
              setIsEditing={setIsEditing}
              setModalIsOpen={setModalIsOpen}
            />
          ))}
          <TableFooter />
        </>
      )}

      <ButtonContainer>
        <Button
          onClick={() => {
            setIsEditing("");
            setModalIsOpen(true);
          }}
        >
          Add delivery method
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}

export default Deliveries;
