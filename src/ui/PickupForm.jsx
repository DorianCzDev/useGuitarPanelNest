import { ErrorMessage } from "@hookform/error-message";
import { Input } from "./FormInput";
import { Label } from "./FormLabel";
import FormRow from "./FormRow";
import { Select } from "./FormSelect";
import { StyledError } from "./FormError";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function PickupForm({ isWorking, isEditing, product, register, errors }) {
  const { reset } = useForm();
  useEffect(() => {
    reset();

    if (isEditing) {
      reset(product);
    }
  }, [reset, product, isEditing]);
  return (
    <>
      <FormRow>
        <Label id="name">Name</Label>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="regularPrice">No Discount Price (in cents)</Label>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="regularPrice"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="discount">Discount (%)</Label>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          {...register("discount", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="discount"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="subcategory">Subcategory</Label>
        <Select
          name="subcategory"
          disabled={isWorking}
          {...register("subcategory", { required: "This field is required" })}
        >
          <option value="electric guitar pickup">Electric Guitar Pickup</option>
          <option value="bass guitar pickup">Bass Guitar Pickup</option>
        </Select>
        <ErrorMessage
          errors={errors}
          name="subcategory"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="pickupStringsNumber">Pickup Strings Number</Label>
        <Input
          type="number"
          id="pickupStringsNumber"
          disabled={isWorking}
          {...register("pickupStringsNumber", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="pickupStringsNumber"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="active">Active</Label>
        <Select name="active" disabled={isWorking} {...register("active")}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="output">Output</Label>
        <Select
          name="output"
          disabled={isWorking}
          {...register("output", {
            required: "This field is required",
          })}
        >
          <option value={"low"}>Low</option>
          <option value={"medium"}>Medium</option>
          <option value={"high"}>High</option>
        </Select>
        <ErrorMessage
          errors={errors}
          name="output"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="kappe">Kappe</Label>
        <Select name="kappe" disabled={isWorking} {...register("kappe")}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="wiring">Wiring</Label>
        <Input
          type="number"
          id="wiring"
          disabled={isWorking}
          {...register("wiring", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="wiring"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="pickup">Pickup type</Label>
        <Select name="pickup" disabled={isWorking} {...register("pickup")}>
          <option value={"humbucker"}>Humbucker</option>
          <option value={"single coil"}>Single coil</option>
        </Select>
      </FormRow>
    </>
  );
}

export default PickupForm;
