export const FormatMoney = (num: string) => {
  const parts = num.split(".");
  if (parts.length < 2) return num + ".00$";
  while (parts[1].length < 2) {
    parts[1] += "0";
  }
  return parts.join(".") + "$";
};
