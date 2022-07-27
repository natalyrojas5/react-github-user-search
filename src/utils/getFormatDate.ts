const getFormatDate = (date: Date) => {
  return new Intl.DateTimeFormat("es", { dateStyle: "long" }).format(date);
};

export default getFormatDate;
