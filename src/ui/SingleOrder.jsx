import styled from "styled-components";
import { useOrder } from "../services/useOrder";
import { H1 } from "./Headers";
import Spinner from "./Spinner";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { StyledError } from "./FormError";
import { countries } from "../helpers/countries";
import Button from "./Button";
import SingleOrderTable from "./SingleOrderTable";
import { statusEnum } from "../helpers/status";
import { useUpdateOrder } from "../services/useUpdateOrder";

const FormCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
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

const Header = styled.header`
  margin-top: 40spx;
`;

const FormSelect = styled.select`
  font-size: 18px;
  padding: 10px 8px;
  margin-top: 8px;
  border-radius: 6px;
  font-weight: 300;
  letter-spacing: 1px;
  border: 1px solid var(--primary-border-color);
  background-color: var(--primary-bg-color);
  outline: none;
  color: var(--primary-font-color);
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
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

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
  justify-content: flex-end;
`;

const Content = styled.article`
  margin-top: 20px;
`;

const DeliveryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 22px;
`;

function SingleOrder({ id, setIsOpen }) {
  const { order, isLoading, isFetching } = useOrder(id);
  const { updateOrder, isPending } = useUpdateOrder();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isLoading) {
      reset(order);
    }
  }, [order, isLoading]);

  function onSubmit(data) {
    updateOrder({ id, data });
  }

  function onError(errors) {
    if (errors?.category?.message) {
      alert(errors.category.message);
    }
  }

  if (isFetching) return <Spinner />;

  const { status } = order;

  const isEditable =
    status === "waiting for payment" ||
    status === "waiting for shipment" ||
    status === "send";
  return (
    <div>
      <H1>Order</H1>
      <Header>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormCol>
            <FormRow>
              <FormLabel htmlFor="firstName">first name</FormLabel>
              <FormInput
                type="text"
                disabled={!isEditable}
                {...register("firstName", {
                  required: "This field is required",
                  maxLength: {
                    value: 20,
                    message: "No more than 20 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ message }) => <StyledError>{message}</StyledError>}
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor="lastName">last name</FormLabel>
              <FormInput
                type="text"
                disabled={!isEditable}
                {...register("lastName", {
                  required: "This field is required",
                  maxLength: {
                    value: 30,
                    message: "No more than 20 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="lastName"
                render={({ message }) => <StyledError>{message}</StyledError>}
              />
            </FormRow>
          </FormCol>
          <FormCol>
            <FormRow>
              <FormLabel htmlFor="address">street address</FormLabel>
              <FormInput
                type="text"
                disabled={!isEditable}
                {...register("address", {
                  required: "This field is required",
                  maxLength: {
                    value: 20,
                    message: "No more than 20 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="address"
                render={({ message }) => <StyledError>{message}</StyledError>}
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor="city">city</FormLabel>
              <FormInput
                type="text"
                disabled={!isEditable}
                {...register("city", {
                  required: "This field is required",
                  maxLength: {
                    value: 20,
                    message: "No more than 20 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="city"
                render={({ message }) => <StyledError>{message}</StyledError>}
              />
            </FormRow>
          </FormCol>
          <FormCol>
            <FormRow>
              <FormLabel htmlFor="postCode">post code</FormLabel>
              <FormInput
                type="text"
                disabled={!isEditable}
                {...register("postCode", {
                  required: "This field is required",
                  maxLength: {
                    value: 10,
                    message: "No more than 20 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="postCode"
                render={({ message }) => <StyledError>{message}</StyledError>}
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor="phoneNumber">phone number</FormLabel>
              <FormInput
                type="text"
                disabled={!isEditable}
                {...register("phoneNumber", {
                  required: "This field is required",
                  maxLength: {
                    value: 20,
                    message: "No more than 20 characters",
                  },
                })}
              />
              <ErrorMessage
                errors={errors}
                name="phoneNumber"
                render={({ message }) => <StyledError>{message}</StyledError>}
              />
            </FormRow>
          </FormCol>
          <FormCol>
            <FormRow>
              <FormLabel htmlFor="country">country</FormLabel>
              <FormSelect
                type="text"
                disabled={!isEditable}
                {...register("country", {
                  required: "This field is required",
                })}
              >
                {countries.map((country) => (
                  <option value={country} key={country}>
                    {country}
                  </option>
                ))}
              </FormSelect>
              <ErrorMessage
                errors={errors}
                name="country"
                render={({ message }) => <StyledError>{message}</StyledError>}
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor="status">status</FormLabel>
              <FormSelect
                type="text"
                disabled={
                  status === "waiting for payment" || status === "canceled"
                }
                {...register("status", {
                  required: "This field is required",
                })}
              >
                {status === "waiting for payment" || status === "canceled" ? (
                  <option value={status}>{status}</option>
                ) : (
                  statusEnum.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))
                )}
              </FormSelect>
              <ErrorMessage
                errors={errors}
                name="status"
                render={({ message }) => <StyledError>{message}</StyledError>}
              />
            </FormRow>
          </FormCol>
          <ButtonContainer>
            <StyledButton
              onClick={() => {
                reset();
                setIsOpen("orders");
              }}
            >
              Back
            </StyledButton>
            <Button>Save</Button>
          </ButtonContainer>
        </form>
        <DeliveryContainer>
          Delivery method: {order.deliveryMethod}
        </DeliveryContainer>
      </Header>
      <Content>
        <SingleOrderTable
          orderProducts={order.orderProducts}
          total={order.total}
        />
      </Content>
    </div>
  );
}

export default SingleOrder;
