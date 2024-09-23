import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { StyledError } from "./FormError";
import Button from "./Button";
import { useCreateDelivery } from "../services/useCreateDelivery";
import { useEffect } from "react";
import { useDelivery } from "../services/useDelivery";
import Spinner from "./Spinner";
import { useUpdateDelivery } from "../services/useUpdateDelivery";

const FormCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const SingleColForm = styled(FormCol)`
  grid-template-columns: 1fr;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 16px;
`;

const FormLabel = styled.label`
  margin-top: 8px;
  padding-bottom: 8px;
  padding-left: 4px;
  font-weight: 300;
  letter-spacing: 1px;
  border-bottom: 1px solid var(--secondary-border-color);
  color: var(--secondary-font-color);
`;

const FormInput = styled.input`
  font-size: 18px;
  padding: 10px 12px;
  margin-top: 8px;
  border-radius: 6px;
  font-weight: 300;
  letter-spacing: 1px;
  border: 1px solid var(--primary-border-color);
  background-color: transparent;
  outline: none;
  color: var(--primary-font-color);
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 12px;
`;

const StyledButton = styled.span`
  display: block;
  margin: 20px 0;
  outline: none;
  border: none;
  font-size: 16px;
  padding: 14px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: transparent;
  color: #fff;
  &:hover {
    background-color: #2f3135;
  }
`;

function DeliveriesForm({ setModalIsOpen, isEditing }) {
  const { createDeliveryMethod, isPendingCreate } = useCreateDelivery();
  const { updateDeliveryMethod, isPendingUpdate } = useUpdateDelivery();
  const { delivery, isFetching } = useDelivery(isEditing);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    if (isEditing) {
      updateDeliveryMethod(
        { isEditing, data },
        {
          onSuccess: () => {
            setModalIsOpen(false);
          },
        }
      );
    } else
      createDeliveryMethod(data, {
        onSuccess: () => {
          setModalIsOpen(false);
        },
      });
  }

  function onError(errors) {
    if (errors?.category?.message) {
      alert(errors.category.message);
    }
  }

  useEffect(() => {
    if (isEditing) {
      reset(delivery);
    } else {
      reset();
    }
  }, [isEditing, delivery, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {isFetching ? (
        <Spinner />
      ) : (
        <>
          <SingleColForm>
            <FormRow>
              <FormLabel htmlFor="supplier">supplier name</FormLabel>
              <FormInput
                type="text"
                {...register("supplier", {
                  required: "This field is required",
                  maxLength: {
                    value: 20,
                    message: "No more than 20 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="supplier"
                render={({ message }) => <StyledError>{message}</StyledError>}
              />
            </FormRow>
          </SingleColForm>
          <FormCol>
            <FormRow>
              <FormLabel htmlFor="cost">cost (in cents)</FormLabel>
              <FormInput
                type="number"
                {...register("cost", {
                  required: "This field is required",
                  maxLength: {
                    value: 5,
                    message: "No more than 5 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="cost"
                render={({ message }) => <StyledError>{message}</StyledError>}
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor="time">
                estimated time (in business days)
              </FormLabel>
              <FormInput
                type="number"
                {...register("time", {
                  required: "This field is required",
                  maxLength: {
                    value: 5,
                    message: "No more than 5 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="time"
                render={({ message }) => <StyledError>{message}</StyledError>}
              />
            </FormRow>
          </FormCol>
          <ButtonsContainer>
            <StyledButton
              variation="cancel"
              onClick={() => setModalIsOpen(false)}
            >
              Back
            </StyledButton>
            <Button>Submit</Button>
          </ButtonsContainer>
        </>
      )}
    </form>
  );
}

export default DeliveriesForm;
