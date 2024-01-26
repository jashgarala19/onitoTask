export const AddressDetailsKey = {
  Address: "Address",
  State: "State",
  City: "City",
  Country: "Country",
  Pincode: "Pincode",
} as const;
export const AddressDetailsFormFields = {
  AddressField: {
    key: AddressDetailsKey.Address,
    placeholder: "Enter Address",
    inputLabel: "Address",
    isRequired: false,
    isMultiLine: true,
  },
  StateField: {
    key: AddressDetailsKey.State,
    placeholder: "Select State",
    inputLabel: "State",
    isRequired: false,
  },
  CityField: {
    key: AddressDetailsKey.City,
    placeholder: "Enter City",
    inputLabel: "City",
    isRequired: false,
  },
  CountryField: {
    key: AddressDetailsKey.Country,
    placeholder: "Select Country",
    inputLabel: "Country",
    isRequired: false,
  },
  PincodeField: {
    key: AddressDetailsKey.Pincode,
    placeholder: "Enter Pincode",
    inputLabel: "Pincode",
    isRequired: false,
    inputProps: {
      maxLength: 6,
    },
  },
} as const;
