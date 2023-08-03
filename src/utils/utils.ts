const sortById = (a: { id: number }, b: { id: number }): number => (a.id < b.id ? 1 : -1);

const isToday = (dateStr: string) => {
  const currentDate = new Date();
  const givenDate = new Date(dateStr);

  return (
    currentDate.getFullYear() === givenDate.getFullYear() &&
    currentDate.getMonth() === givenDate.getMonth() &&
    currentDate.getDate() === givenDate.getDate()
  );
};

const formatDate = (dateStr: string) => {
  return isToday(dateStr)
    ? new Date(dateStr).toTimeString().split(' ')[0]
    : new Date(dateStr).toJSON().substring(0, 19).replace('T', ' ');
};

export { sortById, isToday, formatDate };
