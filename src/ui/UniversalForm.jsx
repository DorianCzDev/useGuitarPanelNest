import { ErrorMessage } from "@hookform/error-message";
import { Input } from "./FormInput";
import { Label } from "./FormLabel";
import FormRow from "./FormRow";
import { StyledError } from "./FormError";
import { FileInput } from "./FormFileInput";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Select } from "./FormSelect";

const defaultValues = {
  description: "",
  featured: "",
  inventory: "",
};

function UniversalForm({ isWorking, register, product, isEditing, errors }) {
  const { reset } = useForm();
  useEffect(() => {
    reset(defaultValues);

    if (isEditing) {
      reset(product);
    }
  }, [reset, product, isEditing]);
  const isRequired = !isEditing && "This field is required";
  return (
    <>
      <FormRow>
        <Label id="featured">Featured</Label>
        <Select name="featured" disabled={isWorking} {...register("featured")}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="inventory">Inventory</Label>
        <Input
          type="number"
          id="inventory"
          disabled={isWorking}
          {...register("inventory")}
        />
        <ErrorMessage
          errors={errors}
          name="inventory"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="description">Description</Label>
        <Input
          type="text"
          id="description"
          disabled={isWorking}
          {...register("description", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="description"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="images">Upload images</Label>
        <FileInput
          id="images"
          accept="image/*"
          multiple={true}
          {...register("images", {
            required: isRequired,
          })}
        />
        <ErrorMessage
          errors={errors}
          name="images"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
    </>
  );
}

export default UniversalForm;
