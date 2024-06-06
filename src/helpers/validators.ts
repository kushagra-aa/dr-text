import CasesEnum from "../types/cases";
import { handleError } from "../lib/showError";
import { checkUnit, checkValue, extractUnit } from "./stringHelpers";

type ValidatedOptionType = {
  currentValue: string | undefined;
  currentCase: CasesEnum | undefined;
  expectedCase: CasesEnum | undefined;
};

const validateOptions = (currentValue: string, expectedCase: string) => {
  let validatedOptions: ValidatedOptionType = {
    currentValue: undefined,
    currentCase: undefined,
    expectedCase: undefined,
  };
  validatedOptions.expectedCase = checkUnit(expectedCase); //"rem"
  validatedOptions.currentValue = checkValue(currentValue); //"16px"
  if (!validatedOptions.expectedCase) {
    handleError("Invalid Expected Case");
  }
  if (!validatedOptions.currentValue) {
    handleError("Invalid Current Value");
  } else {
    validatedOptions.currentCase = checkUnit(extractUnit(currentValue)); //"px"
    if (!validatedOptions.currentCase) {
      handleError("Invalid Current Case");
    }
  }
  return validatedOptions;
};

export { validateOptions };
