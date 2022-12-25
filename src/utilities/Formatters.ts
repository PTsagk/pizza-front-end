export const FormatMoney = (num: string | number) => {
  const parts = num.toString().split(".");
  if (parts.length < 2) return num + ".00$";

  parts[1] = parts[1].slice(0, 2);

  while (parts[1].length < 2) {
    parts[1] += "0";
  }
  return parts.join(".") + "$";
};
