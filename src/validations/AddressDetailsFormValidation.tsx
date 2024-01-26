import { AddressDetailsKey } from "constants/AddressDetailFormConstants";
import { PersonDetailsKey } from "constants/PersonalDetailFormConstants";
import * as yup from "yup";
const { Address, City, Country, Pincode, State } = AddressDetailsKey;
const schema = yup.object({
  [Address]: yup.string(),
  [City]: yup.string(),
  [Country]: yup.string(),
  [Pincode]: yup.string().matches(/^\d{6}$/, {
    message: "Enter valid PinCode",
    excludeEmptyString: true,
  }),
  [State]: yup.string(),
});

export default schema;
