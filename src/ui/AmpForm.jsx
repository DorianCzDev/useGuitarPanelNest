import { useForm } from "react-hook-form";
import { Input } from "./FormInput";
import { Label } from "./FormLabel";
import FormRow from "./FormRow";
import { useEffect } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { StyledError } from "./FormError";
import { Select } from "./FormSelect";

function AmpForm({ isWorking, isEditing, product, register, errors }) {
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
          <option value="electric guitar amp">Electric Guitar Amp</option>
          <option value="bass guitar amp">Bass Guitar Amp</option>
          <option value="acoustic guitar amp">Acoustic Guitar Amp</option>
        </Select>
        <ErrorMessage
          errors={errors}
          name="subcategory"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="speakers">Speakers</Label>
        <Input
          type="text"
          id="speakers"
          disabled={isWorking}
          {...register("speakers", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="speakers"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="power">Power</Label>
        <Input
          type="number"
          id="power"
          disabled={isWorking}
          {...register("power", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="power"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="weight">Weight</Label>
        <Input
          type="number"
          id="weight"
          disabled={isWorking}
          {...register("weight", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="weight"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="footSwitchConnection">Foot Switch Connection</Label>
        <Select
          name="footSwitchConnection"
          disabled={isWorking}
          {...register("footSwitchConnection")}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="channels">Channels</Label>
        <Input
          type="number"
          id="channels"
          disabled={isWorking}
          {...register("channels", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="channels"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="memorySlots">Memory Slots</Label>
        <Input
          type="number"
          id="memorySlots"
          disabled={isWorking}
          {...register("memorySlots", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="memorySlots"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
      <FormRow>
        <Label id="headphoneOutput">Headphone Output</Label>
        <Select
          name="headphoneOutput"
          disabled={isWorking}
          {...register("headphoneOutput")}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="effectsProcessor">Effects Processor</Label>
        <Select
          name="effectsProcessor"
          disabled={isWorking}
          {...register("effectsProcessor")}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="recordingOutput">Recording Output</Label>
        <Select
          name="recordingOutput"
          disabled={isWorking}
          {...register("recordingOutput")}
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="reverb">Reverb</Label>
        <Select name="reverb" disabled={isWorking} {...register("reverb")}>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </Select>
      </FormRow>
      <FormRow>
        <Label id="lineInput">Line Input</Label>
        <Input
          type="number"
          id="lineInput"
          disabled={isWorking}
          {...register("lineInput", {
            required: "This field is required",
          })}
        />
        <ErrorMessage
          errors={errors}
          name="lineInput"
          render={({ message }) => <StyledError>{message}</StyledError>}
        />
      </FormRow>
    </>
  );
}

export default AmpForm;
