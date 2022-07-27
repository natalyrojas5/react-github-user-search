const hasValues = (values: any): boolean => {
  return Object.values(values).filter((v) => v !== "").length > 0;
};

export default hasValues;
