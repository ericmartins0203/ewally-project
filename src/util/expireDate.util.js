const expireDateUtil = (barcode) => {
  const expireDate = barcode.slice(40, 44);
  let date = new Date("10/07/1997");
  date.setTime(date.getTime() + expireDate * 24 * 60 * 60 * 1000);
  date =
    ("0" + date.getDate()).slice(-2) +
    "/" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    date.getFullYear();
  return date;
};

export default expireDateUtil;
