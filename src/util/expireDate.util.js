const expireDate = (barcode) => {
  const expireDate = barcode.slice(40, 44);

  if (expireDate == "0000") {
    return "there is no expiration date";
  }

  let date = new Date("10/07/1997");
  date.setTime(date.getTime() + expireDate * 24 * 60 * 60 * 1000);
  date =
    date.getFullYear() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    (date.getDate() + 1);
  return date;
};

export default expireDate;
