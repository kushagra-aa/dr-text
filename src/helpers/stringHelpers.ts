import { CASES_OPTIONS } from "../constants";

export const extractValue = (val: string): number =>
  parseFloat((val.match(/\d+(\.\d+)?/g) || ["0"])[0].toString());
export const addUnit = (val: number, cas: string): string => `${val}${cas}`;
export const extractUnit = (val: string): string =>
  (val.match(/(\D+)$/) || ["", ""])[1].toString().toLowerCase();
export const extractValueNUnit = (
  val: string
): { value: number; cas: string } => ({
  value: extractValue(val),
  cas: extractUnit(val),
});
// Use the trim() method to remove any leading/trailing spaces.
// Split the trimmed text into an array of words using the split() method with a space as the delimiter.
export const splitString = (text: string): string[] => {
  const splitKeywords = ["to", "-->", "->", "=", ">"];
  const pattern = new RegExp(`(?:${splitKeywords.join("|")})`);
  const trimmedText = text.trim();
  return trimmedText.split(pattern).map((s) => s.trim());
};
// To check if the given string is a valid unit and returns UnitEnum Type.
export const checkUnit = (text: string) =>
  CASES_OPTIONS.find((u) => u.toLowerCase() === text.trim().toLowerCase());

// To check if the given string is a valid value(`16px`) and returns string.
export const checkValue = (text: string) =>
  text.trim().match(/^(\d*)([a-zA-Z]+)$/)
    ? text.trim().toLowerCase()
    : undefined;
