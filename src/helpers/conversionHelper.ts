import CasesEnum from "../types/cases";
import { checkCase, convertCase, divideStringIntoArray } from "./caseHelpers";

const conversionHelper = (
  inputString: string,
  expectedCase: CasesEnum
): string => {
  const currentCase = checkCase(inputString);
  const stringArray = divideStringIntoArray(inputString, currentCase);
  const result = convertCase(stringArray, expectedCase);
  return result;
};

export default conversionHelper;
