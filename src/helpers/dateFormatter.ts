function dateFormatter(dateToFormat: Date): string {
  const date = new Date(dateToFormat);
  const formattedDate =
    singleDigitFormat(date.getDate()) +
    "." +
    singleDigitFormat(date.getMonth() + 1) +
    "." +
    date.getFullYear().toString().substr(-2);
  return formattedDate;
}

function singleDigitFormat(input: number): string {
  return input.toString().length !== 2 ? "0" + input : input.toString();
}
export default dateFormatter;
