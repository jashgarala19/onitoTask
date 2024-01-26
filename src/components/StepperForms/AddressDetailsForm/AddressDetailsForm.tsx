import { Button, Grid, InputLabel, Stack } from "@mui/material";
import FormTextInput from "components/FormInputs/FormTextInput/FormTextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AddressDetailsFormValidationSchema from "validations/AddressDetailsFormValidation";
import {
  AddressDetailsFormFields,
  AddressDetailsKey,
} from "constants/AddressDetailFormConstants";

import FormAutoCompleteInput from "components/FormInputs/FormAutoCompleteInput/FormAutoCompleteInput";
import { useEffect, useState } from "react";
import axios from "axios";
const { Address, State, City, Country, Pincode } = AddressDetailsKey;

const { AddressField, StateField, CityField, CountryField, PincodeField } =
  AddressDetailsFormFields;
import { debounce } from "lodash";
import useCountrySearch from "hooks/useCountrySearch";
import { useDispatch, useSelector } from "react-redux";
import {
  resetStepperFormValues,
  setStepperFormValues,
} from "features/stepperForm/stepperFormSlice";
const defaultValues = {
  [Address]: "",
  [State]: "",
  [City]: "",
  [Country]: "",
  [Pincode]: "",
};

const AddressDetailsForm = ({
  handlePreviousStepAndDispatch,
  formData,
  handleFormSubmit,
  handleGoBack,
}) => {
  const { control, handleSubmit, reset, getValues, watch } = useForm({
    defaultValues: {
      [Address]: formData?.Address || "",
      [State]: formData?.State || "",
      [City]: formData?.City || "",
      [Country]: formData?.Country || "",
      [Pincode]: formData?.Pincode || "",
    },
    resolver: yupResolver(AddressDetailsFormValidationSchema),
  });

  const { stepperFormValues } = useSelector((state) => state.stepperForm);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // dispatch(
    //   setStepperFormValues({
    //     key: "addressDetails",
    //     data: data,
    //   })
    // );
    // reset();
    handleFormSubmit(data);
    dispatch(resetStepperFormValues());
    handleGoBack();
  };

  const handlePrevious = () => {
    handlePreviousStepAndDispatch(getValues());
  };

  const searchCountryValue = watch("Country");
  const { countries, loading, error } = useCountrySearch(searchCountryValue);
  return (
    <form>
      <Grid container flexDirection={"column"} py={2} gap={3}>
        <Grid container gap={4}>
          <Grid item>
            <FormTextInput
              name={AddressField.key}
              control={control}
              placeHolder={AddressField.placeholder}
              inputLabel={AddressField.inputLabel}
              isRequired={AddressField.isRequired}
              isMultiLine={AddressField.isMultiLine}
            />
          </Grid>
          <Grid item>
            <FormTextInput
              name={StateField.key}
              control={control}
              placeHolder={StateField.placeholder}
              inputLabel={StateField.inputLabel}
              isRequired={StateField.isRequired}
            />
          </Grid>
          <Grid item>
            <FormTextInput
              name={CityField.key}
              control={control}
              placeHolder={CityField.placeholder}
              inputLabel={CityField.inputLabel}
              isRequired={CityField.isRequired}
            />
          </Grid>
        </Grid>
        <Grid container gap={4}>
          <Grid item>
            {/* <FormTextInput
              name={CountryField.key}
              control={control}
              placeHolder={CountryField.placeholder}
              inputLabel={CountryField.inputLabel}
              isRequired={CountryField.isRequired}
            /> */}
            <FormAutoCompleteInput
              name={CountryField.key}
              control={control}
              placeHolder={CountryField.placeholder}
              inputLabel={CountryField.inputLabel}
              isRequired={CountryField.isRequired}
              menuItems={{
                data: countries,
                loading: loading,
                error: error,
                key: "country",
              }}
            />
          </Grid>
          <Grid item>
            <FormTextInput
              name={PincodeField.key}
              control={control}
              placeHolder={PincodeField.placeholder}
              inputLabel={PincodeField.inputLabel}
              isRequired={PincodeField.isRequired}
              inputProps={PincodeField.inputProps}
            />
          </Grid>
          {/* <Grid item>
            <InputLabel sx={{ color: Colors.primaryColor }}>
              Govt Issued ID
            </InputLabel>
            <Grid container flexDirection={"row"} gap={3}>
              <Grid item>
                <FormSelectInput
                  name={GovtIssueIdTypeField.key}
                  control={control}
                  inputLabel=""
                  isRequired={GovtIssueIdTypeField.isRequired}
                  menuItems={GovtIssueIdTypeField.menuItems}
                />
              </Grid>
              <Grid item>
                <FormTextInput
                  name={GovtIssuedIdField.key}
                  control={control}
                  placeHolder={
                    govtIssueIdType === GovtIdType.Aadhar
                      ? `XXXX XXXX XXXX`
                      : govtIssueIdType === GovtIdType.PAN
                      ? "XXXXXXXXXX"
                      : "Enter GOVT ID"
                  }
                  inputLabel=""
                  isRequired={GovtIssuedIdField.isRequired}
                  inputProps={{
                    maxLength:
                      govtIssueIdType === GovtIdType.Aadhar
                        ? 14
                        : govtIssueIdType === GovtIdType.PAN
                        ? 10
                        : null,
                  }}
                />
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
        <Grid item py={2}>
          <Stack flexDirection={"row"} gap={2}>
            <Button onClick={handlePrevious} variant="outlined">
              Back
            </Button>
            <Button
              onClick={() =>
                reset({
                  [Address]: "",
                  [State]: "",
                  [City]: "",
                  [Country]: "",
                  [Pincode]: "",
                })
              }
              variant="outlined"
            >
              Reset
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              disableElevation={true}
              variant={"contained"}
              sx={{ flex: 1, color: "white", letterSpacing: "2px" }}
            >
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddressDetailsForm;
