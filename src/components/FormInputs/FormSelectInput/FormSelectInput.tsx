import { Grid, InputLabel } from "@mui/material";
import SelectInput from "components/Inputs/SelectInput/SelectInput";

import { Controller } from "react-hook-form";
import Colors from "theme/colors/Colors";

const FormSelectInput = ({
  name,
  control,
  inputLabel,
  menuItems,
  isRequired,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState }) => (
        <Grid container flexDirection="column" gap={1}>
          <InputLabel required={isRequired} sx={{ color: Colors.primaryColor }}>
            {inputLabel}
          </InputLabel>

          <SelectInput
            handleChange={(value: string) => {
              onChange(value);
            }}
            menuItems={menuItems}
            value={value}
            isError={!!fieldState.error}
            errorMessage={fieldState?.error?.message}
          />
        </Grid>
      )}
    ></Controller>
  );
};

export default FormSelectInput;
