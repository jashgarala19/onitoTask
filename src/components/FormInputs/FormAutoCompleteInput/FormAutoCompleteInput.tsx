import { Box, Grid, InputLabel, Typography } from "@mui/material";
import AutoCompleteInput from "components/Inputs/AutoCompleteInput/AutoCompleteInput";
import TextInput from "components/Inputs/TextInput/TextInput";
import { Controller } from "react-hook-form";
import Colors from "theme/colors/Colors";

const FormAutoCompleteInput = ({
  name,
  control,
  placeHolder,
  inputLabel,
  isRequired,
  menuItems,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { ref, value, onChange }, fieldState }) => (
        <Grid container flexDirection="column" gap={1}>
          <InputLabel required={isRequired} sx={{ color: Colors.primaryColor }}>
            {inputLabel}
          </InputLabel>
          <AutoCompleteInput
            menuItems={menuItems}
            name={name}
            inputRef={ref}
            placeHolder={placeHolder}
            onChange={onChange}
            value={value}
            isError={!!fieldState.error}
            errorMessage={fieldState.error ? fieldState.error.message : null}
          />
        </Grid>
      )}
    ></Controller>
  );
};

export default FormAutoCompleteInput;
