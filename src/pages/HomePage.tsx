import { Box, Typography } from "@mui/material";
import CustomizedSteppers from "components/Stepper/Stepper";
import Stepper from "components/Stepper/Stepper";
import AddressDetailsForm from "components/StepperForms/AddressDetailsForm/AddressDetailsForm";
import PersonalDetailsForm from "components/StepperForms/PersonalDetailsForm/PersonalDetailsForm";
import Colors from "theme/colors/Colors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStepperFormValues } from "features/stepperForm/stepperFormSlice";
import DataTableExample from "components/DataTable/DataTable";
import { addUser } from "features/user/userSlice";
import { UserColumns } from "constants/DataTable";
const HomePage = () => {
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const { stepperFormValues } = useSelector((state) => state.stepperForm);
  const { personalDetails, addressDetails } = stepperFormValues;

  const { users } = useSelector((state) => state.user);
  const handleAddForward = () => setStep(step + 1);
  const handleGoBack = () => setStep(step - 1);
  const handleNextStepAndDispatch = (formValues) => {
    dispatch(
      setStepperFormValues({
        key: "personalDetails",
        data: formValues,
      })
    );
    handleAddForward();
  };

  const handlePreviousStepAndDispatch = (formValues) => {
    console.log("formValues", formValues);
    dispatch(
      setStepperFormValues({
        key: "addressDetails",
        data: formValues,
      })
    );
    handleGoBack();
  };

  const handleFormSubmit = (data) => {
    console.log(stepperFormValues, "stepperFormValues");

    const FormData = {
      ...personalDetails,
      ...data,
    };
    dispatch(addUser(FormData));
  };

  const generateForm = () => {
    let Form;
    switch (step) {
      case 0:
        Form = (
          <PersonalDetailsForm
            handleNextStepAndDispatch={handleNextStepAndDispatch}
            formData={personalDetails}
          />
        );
        break;
      case 1:
        Form = (
          <AddressDetailsForm
            handlePreviousStepAndDispatch={handlePreviousStepAndDispatch}
            formData={addressDetails}
            handleFormSubmit={handleFormSubmit}
            handleGoBack={handleGoBack}
          />
        );
        break;
    }
    return Form;
  };
  return (
    <Box mx={2}>
      <Box
        sx={{
          maxWidth: "max-content",
          bgcolor: Colors.primaryLightColor,
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "10px",
            bgcolor: Colors.primaryColor,
          }}
        ></Box>
        <CustomizedSteppers step={step} />
        <Box sx={{ py: 0, px: 3 }} mb={3}>
          {/* <Typography variant="h1">Personal Details</Typography> */}
          {/* <PersonalDetailsForm handleNextStep={handleNextStep} /> */}
          {/* <Typography variant="h1">Address Details</Typography> */}
          {/* <AddressDetailsForm /> */}
          {generateForm()}
        </Box>
      </Box>

      <DataTableExample data={users} columns={UserColumns} />
    </Box>
  );
};

export default HomePage;
