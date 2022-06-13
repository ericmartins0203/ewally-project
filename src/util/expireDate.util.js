const expireDate = (lineDigit) => {
  const expireDate = lineDigit.slice(33, 37);

  console.log(expireDate);

  if (expireDate == "0000") {
    return "there is no expiration date";
  }

  let date = new Date("10/07/1997");

  date.setTime(date.getTime() + expireDate * 24 * 60 * 60 * 1000);

  return (
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + (date.getDate() + 1)).slice(-2)
  );
};

export default expireDate;
