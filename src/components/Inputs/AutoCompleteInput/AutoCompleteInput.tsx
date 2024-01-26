import { Autocomplete, Box, TextField, Typography } from "@mui/material";

const AutoCompleteInput = ({
  name,
  inputRef,
  value,
  placeHolder,
  onChange,
  isError,
  errorMessage,
  menuItems,
}) => {
  const handleAutoCompleteChange = (event, option) => {
    if (option === null) {
      onChange("");
      return;
    }
    onChange(option[menuItems.key]);
  };

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={menuItems?.data}
      autoHighlight
      getOptionLabel={(option) => option?.country}
      renderOption={(props, option) => {
        return (
          <Box component="li" {...props}>
            <Typography>{option?.country}</Typography>
          </Box>
        );
      }}
      onChange={handleAutoCompleteChange}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          ref={inputRef}
          placeholder={placeHolder}
          variant="standard"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
          value={value}
          onChange={onChange}
          error={isError}
          helperText={errorMessage}
        />
      )}
    />
  );
};

export default AutoCompleteInput;
