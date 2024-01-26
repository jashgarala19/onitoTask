import { Button, Grid, InputLabel, Stack } from "@mui/material";
import FormTextInput from "components/FormInputs/FormTextInput/FormTextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormSelectInput from "components/FormInputs/FormSelectInput/FormSelectInput";
import Colors from "theme/colors/Colors";
import { useEffect } from "react";
import {
  PersonDetailsKey,
  PersonalDetailsFormFields,
} from "constants/PersonalDetailFormConstants";
import { GovtIdType } from "constants/menuConstants";
import PersonalDetailsFormValidationSchema from "validations/PersonDetailsFormValidation";
const { Name, Age, Sex, GovtIssueIdType, Mobile, GovtIssuedId } =
  PersonDetailsKey;

const {
  NameField,
  AgeField,
  SexField,
  GovtIssueIdTypeField,
  MobileField,
  GovtIssuedIdField,
} = PersonalDetailsFormFields;

const defaultValues = {
  [Name]: "",
  [Age]: "",
  [Sex]: "",
  [Mobile]: "",
  [GovtIssueIdType]: "",
  [GovtIssuedId]: "",
};

const PersonalDetailsForm = ({
  handleNextStepAndDispatch,
  formData,

}) => {
  const { control, handleSubmit, resetField, watch, reset } = useForm({
    defaultValues: {
      [Name]: formData?.Name || "",
      [Age]: formData?.Age || "",
      [Sex]: formData?.Sex || "",
      [Mobile]: formData?.Mobile || "",
      [GovtIssueIdType]: formData?.GovtIssueIdType || "",
      [GovtIssuedId]: formData?.GovtIssuedId || "",
    },
    resolver: yupResolver(PersonalDetailsFormValidationSchema),
  });

  const onSubmit = (data) => {
    handleNextStepAndDispatch(data);
    // reset();
  };

  const govtIssueIdType = watch(GovtIssueIdType);
  useEffect(() => {
    resetField(GovtIssuedId);
  }, [govtIssueIdType, resetField]);

  return (
    <form>
      <Grid container flexDirection={"column"} py={2} gap={3}>
        <Grid container gap={4}>
          <Grid item>
            <FormTextInput
              name={NameField.key}
              control={control}
              placeHolder={NameField.placeholder}
              inputLabel={NameField.inputLabel}
              isRequired={NameField.isRequired}
            />
          </Grid>
          <Grid item>
            <FormTextInput
              name={AgeField.key}
              control={control}
              placeHolder={AgeField.placeholder}
              inputLabel={AgeField.inputLabel}
              isRequired={AgeField.isRequired}
            />
          </Grid>
          <Grid item>
            <FormSelectInput
              name={SexField.key}
              control={control}
              inputLabel={SexField.inputLabel}
              menuItems={SexField.menuItems}
              isRequired={SexField.isRequired}
            />
          </Grid>
        </Grid>
        <Grid container gap={4}>
          <Grid item>
            <FormTextInput
              name={MobileField.key}
              control={control}
              placeHolder={MobileField.placeholder}
              inputLabel={MobileField.inputLabel}
              isRequired={MobileField.isRequired}
              inputProps={MobileField.inputProps}
            />
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
        <Grid item py={2}>
          <Stack flexDirection={"row"} gap={2}>
            <Button
              onClick={() =>
                reset({
                  [Name]: "",
                  [Age]: "",
                  [Sex]: "",
                  [Mobile]: "",
                  [GovtIssueIdType]: "",
                  [GovtIssuedId]: "",
                })
              }
              variant={"outlined"}
            >
              Reset
            </Button>
            <Button
              onClick={handleSubmit(onSubmit)}
              disableElevation={true}
              variant={"contained"}
              sx={{ flex: 1, color: "white", letterSpacing: "2px" }}
            >
              Next
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default PersonalDetailsForm;
