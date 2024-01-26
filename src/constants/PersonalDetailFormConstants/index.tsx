import { GovtIdTypeMenuItems, SexMenuItems } from "constants/menuConstants";

export const PersonDetailsKey = {
  Name: "Name",
  Age: "Age",
  Sex: "Sex",
  Mobile: "Mobile",
  GovtIssueIdType: "GovtIssueIdType",
  GovtIssuedId: "GovtIssuedId",
} as const;
export const PersonalDetailsFormFields = {
  NameField: {
    key: PersonDetailsKey.Name,
    placeholder: "Enter Name",
    inputLabel: "Name",
    isRequired: true,
  },
  AgeField: {
    key: PersonDetailsKey.Age,
    placeholder: "Enter Age in Years",
    inputLabel: "Age",
    isRequired: true,
  },
  SexField: {
    key: PersonDetailsKey.Sex,
    placeholder: "Select Gender",
    inputLabel: "Sex",
    isRequired: true,
    menuItems: SexMenuItems,
  },
  MobileField: {
    key: PersonDetailsKey.Mobile,
    placeholder: "[+91] - xxxxxxxxxx",
    inputLabel: "Mobile (10 Digits)",
    isRequired: false,
    inputProps: {
      maxLength: 10,
    },
  },
  GovtIssueIdTypeField: {
    key: PersonDetailsKey.GovtIssueIdType,
    placeholder: "Select ID Type",
    inputLabel: "Govt Issued ID Type",
    isRequired: false,
    menuItems: GovtIdTypeMenuItems,
  },
  GovtIssuedIdField: {
    key: PersonDetailsKey.GovtIssuedId,
    placeholder: "Enter Govt ID",
    inputLabel: "Govt Issued ID",
    isRequired: false,
  },
} as const;
