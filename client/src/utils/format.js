import { convertIfNumber } from "utils/transform";

export const formatSearchData = (input_data) => {
  const search_data = {};

  for (const [key, value] of Object.entries(input_data)) {
    if (Array.isArray(value)) search_data[key] = value?.toString();
    else if (Boolean(value) || value === 0)
      search_data[key] = convertIfNumber(value);
  }
  return search_data;
};

export const formatTwoDigit = (number) => String(number).padStart(2, "0");

export const formatBloodGroup = (value) => {
  switch (value) {
    case "A_POSITIVE":
      return "A+";
    case "A_NEGATIVE":
      return "A-";
    case "B_POSITIVE":
      return "B+";
    case "B_NEGATIVE":
      return "B-";
    case "AB_POSITIVE":
      return "AB+";
    case "AB_NEGATIVE":
      return "AB-";
    case "O_POSITIVE":
      return "O+";
    case "O_NEGATIVE":
      return "O-";

    default:
      return "";
  }
};
