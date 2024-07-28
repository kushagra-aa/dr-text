import CasesEnum from "../types/cases";
import { convertCase, divideStringIntoArray } from "./caseHelpers";

const conversionHelper = (
  currentValue: string,
  currentCase: CasesEnum,
  expectedCase: CasesEnum
): string =>
  convertCase(divideStringIntoArray(currentValue, currentCase), expectedCase);

export default conversionHelper;
