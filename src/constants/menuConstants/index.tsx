export const SexMenuItems = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
] as const;

export const GovtIdTypeMenuItems = [
  {
    value: "Aadhar",
    label: "Aadhar",
  },
  {
    value: "PAN",
    label: "PAN",
  },
] as const;

export const GovtIdType = {
  Aadhar: "Aadhar",
  PAN: "PAN",
} as const;
