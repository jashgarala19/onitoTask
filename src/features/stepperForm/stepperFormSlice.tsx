import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepperFormValues: {},
};

export const stepperFormSlice = createSlice({
  name: "stepperFormSlice",
  initialState,
  reducers: {
    setStepperFormValues: (state, action) => {
      const { key, data } = action.payload;
      state.stepperFormValues = {
        ...state.stepperFormValues,
        [key]: data,
      };
    },
    resetStepperFormValues: (state) => {
      state.stepperFormValues = {};
    },
  },
});

export const { setStepperFormValues, resetStepperFormValues } =
  stepperFormSlice.actions;

export default stepperFormSlice.reducer;
