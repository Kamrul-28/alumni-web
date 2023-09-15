export const getAllBatches = (start_year = 1991, course_length = 4) => {
  const current_year = new Date().getFullYear() - course_length;

  if (start_year > current_year) return [];

  const year_list = Array.from(
    { length: current_year - start_year + 1 },
    (_, index) => start_year + index,
  );

  return year_list;
};
