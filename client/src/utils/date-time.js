import dayjs from "dayjs";

export const formatShortMonth = (date) => {
  return dayjs(date, "MM-DD-YYYY").format("D MMM");
};

export const formatLocalDate = (date) => {
  return dayjs(date).format("MMMM D, YYYY");
};
