import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";

import Colors from "theme/colors/Colors";

const SelectInput = ({
  handleChange,
  value,
  menuItems,
  isError,
  errorMessage,
}) => {
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <Select
        // labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        // label={label}
        onChange={handleChange}
        variant="standard"
        error={isError}
      >
        {menuItems.map(({ value, label }) => (
          <MenuItem value={value}>{label}</MenuItem>
        ))}
      </Select>
      {isError && (
        <FormHelperText sx={{ color: Colors.danger, m: 0 }}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectInput;
