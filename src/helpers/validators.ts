import CasesEnum from "../types/cases";
import { handleError } from "../lib/showError";

const checkCase = (c: CasesEnum | "All") => (c === "All" ? false : true);

const validateOptions = (
  currentValue: CasesEnum | "All",
  expectedCase: CasesEnum | "All"
) => {
  if (checkCase(expectedCase)) {
    handleError("Invalid Expected Case");
    return false;
  }
  if (checkCase(currentValue)) {
    handleError("Invalid Current Case");
    return false;
  }
  return true;
};

export { validateOptions };
