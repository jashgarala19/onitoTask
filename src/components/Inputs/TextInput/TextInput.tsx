import { TextField } from "@mui/material";

const TextInput = ({
  onChange,
  isError,
  errorMessage,
  placeHolder,
  name,
  inputProps = {},
  inputRef,
  value,
  params,
  multiline = false,
}) => {
  return (
    <TextField
      ref={inputRef}
      id={name}
      name={name}
      placeholder={placeHolder}
      variant="standard"
      onChange={onChange}
      error={isError}
      helperText={isError ? errorMessage : null}
      type="text"
      size="medium"
      inputProps={inputProps}
      value={value}
      multiline={multiline}
      maxRows={2}
      autoComplete='off'
      {...params}
    />
  );
};

export default TextInput;
