export const capitalizeFirstLetterOfString = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
export const capitalizeFirstLetterOfArrayString = (
  strArr: string[]
): string[] => strArr.map((str) => capitalizeFirstLetterOfString(str));
