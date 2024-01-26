import { Box, Grid, InputLabel, Typography } from "@mui/material";
import TextInput from "components/Inputs/TextInput/TextInput";
import { Controller } from "react-hook-form";
import Colors from "theme/colors/Colors";

const FormTextInput = ({
  name,
  control,
  placeHolder,
  inputLabel,
  isRequired,
  inputProps = {},
  isMultiLine,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { onChange, ref, value }, fieldState }) => (
        <Grid container flexDirection="column" gap={1}>
          <InputLabel required={isRequired} sx={{ color: Colors.primaryColor }}>
            {inputLabel}
          </InputLabel>
          <TextInput
            name={name}
            inputRef={ref}
            onChange={onChange}
            placeHolder={placeHolder}
            isError={!!fieldState.error}
            errorMessage={fieldState?.error?.message}
            inputProps={inputProps}
            value={value}
            multiline={isMultiLine}
          />
        </Grid>
      )}
    ></Controller>
  );
};

export default FormTextInput;
