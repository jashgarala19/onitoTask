import { configureStore } from "@reduxjs/toolkit";
import StepperFormReduer from "features/stepperForm/stepperFormSlice";
import UserReducer from "features/user/userSlice";
export const store = configureStore({
  reducer: {
    stepperForm: StepperFormReduer,
    user: UserReducer,
  },
});
