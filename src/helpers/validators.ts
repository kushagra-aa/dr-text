import CasesEnum from "../types/cases";
import { handleError } from "../lib/showError";
import showInfo from "../lib/showInfo";

const validateOptions = (expectedCase: string): CasesEnum | "All" => {
  switch (expectedCase) {
    case CasesEnum.camelCase:
      return CasesEnum.camelCase;
    case CasesEnum.kebabCase:
      return CasesEnum.kebabCase;
    case CasesEnum.lowerCase:
      return CasesEnum.lowerCase;
    case CasesEnum.pascalCase:
      return CasesEnum.pascalCase;
    case CasesEnum.screamingSnakeCase:
      return CasesEnum.screamingSnakeCase;
    case CasesEnum.sentenceCase:
      return CasesEnum.sentenceCase;
    case CasesEnum.snakeCase:
      return CasesEnum.snakeCase;
    case CasesEnum.titleCase:
      return CasesEnum.titleCase;
    case CasesEnum.upperCase:
      return CasesEnum.upperCase;
    case CasesEnum.upperSnakeCase:
      return CasesEnum.upperSnakeCase;
    default:
      handleError("Invalid Expected Case");
      return "All";
  }
};

export { validateOptions };
