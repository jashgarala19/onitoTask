import { PersonDetailsKey } from "constants/PersonalDetailFormConstants";
import * as yup from "yup";
const { Name, Age, Sex, GovtIssueIdType, Mobile, GovtIssuedId } =
  PersonDetailsKey;
const schema = yup.object({
  [Name]: yup.string().required().min(3),
  [Age]: yup
    .string()
    .required()
    .matches(/^(?:[1-9]|[1-9][0-9])$/, "Enter valid Age"),
  [Sex]: yup.string().required(),
  [Mobile]: yup.string().matches(/^[789]\d{9}$/, {
    message: "Enter valid Indian Mobile Number",
    excludeEmptyString: true,
  }),
  [GovtIssueIdType]: yup.string(),
  [GovtIssuedId]: yup.string().test({
    name: "GovtIssueIdType",
    test: function (value) {
      if (value === "") {
        return true;
      }

      const govtIssueIdType = this.parent.GovtIssueIdType;
      if (govtIssueIdType === "Aadhar") {
        const AadharCardRegex = /^([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)/;
        if (!AadharCardRegex.test(value)) {
          throw new yup.ValidationError(
            "Invalid Aadhar Card Number",
            value,
            "GovtIssuedId"
          );
        }
      } else if (govtIssueIdType === "PAN") {
        const PANCardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!PANCardRegex.test(value)) {
          throw new yup.ValidationError(
            "Invalid PAN Card Number",
            value,
            "GovtIssuedId"
          );
        }
      } else {
        throw new yup.ValidationError(
          "Invalid GOVT ID Type",
          value,
          "GovtIssueIdType"
        );
      }

      return true;
    },
  }),
});

export default schema;
