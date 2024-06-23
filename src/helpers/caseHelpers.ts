import CasesEnum from "../types/cases";

const checkIfAllFirstLetterUppercase = (arr: string[]) =>
  arr.every((str) => str.length > 0 && str[0] === str[0].toUpperCase());
const checkIfSomeLettersUppercase = (arr: string[]) =>
  arr.some((str) => str.length > 0 && str === str.toUpperCase());

export const checkCase = (currentVal: string): CasesEnum | "All" => {
  const fixedVal = currentVal.trim();
  const firstCheckResult = {
    isUpperCase: fixedVal === fixedVal.toUpperCase(),
    isLowerCase: fixedVal === fixedVal.toLowerCase(),
    hasUnderscore: fixedVal.includes("_"),
    hasHyphen: fixedVal.includes("-"),
    hasSpace: fixedVal.includes(" "),
  };
  if (
    firstCheckResult.hasHyphen &&
    firstCheckResult.isLowerCase &&
    firstCheckResult.isUpperCase &&
    firstCheckResult.hasSpace &&
    firstCheckResult.hasUnderscore
  ) {
    return "All";
  }
  if (firstCheckResult.hasHyphen && firstCheckResult.isLowerCase) {
    return CasesEnum.kebabCase;
  }
  if (firstCheckResult.hasHyphen && firstCheckResult.isUpperCase) {
    return CasesEnum.screamingSnakeCase;
  }
  if (firstCheckResult.hasUnderscore && firstCheckResult.isLowerCase) {
    return CasesEnum.snakeCase;
  }
  if (firstCheckResult.hasUnderscore && firstCheckResult.isUpperCase) {
    return CasesEnum.upperSnakeCase;
  }
  if (firstCheckResult.hasSpace) {
    if (firstCheckResult.isUpperCase) {
      return CasesEnum.upperCase;
    }
    if (firstCheckResult.isLowerCase) {
      return CasesEnum.lowerCase;
    }
    const sentenceArray = fixedVal.split(".").map((s) => s.trim());
    const wordArray = fixedVal.split(" ");
    if (checkIfAllFirstLetterUppercase(wordArray)) {
      return CasesEnum.titleCase;
    } else if (checkIfAllFirstLetterUppercase(sentenceArray)) {
      return CasesEnum.sentenceCase;
    }
  } else {
    if (
      !firstCheckResult.hasHyphen &&
      !firstCheckResult.hasSpace &&
      !firstCheckResult.hasUnderscore
    ) {
      const valArray = fixedVal.split("");
      // Check for Pascal and Camel Case
      // Pascal === First letter is uppercase && has other uppercase after
      // Camel === First letter is lower && has other uppercase after
      if (valArray[0].toUpperCase() === valArray[0]) {
        if (checkIfSomeLettersUppercase(valArray)) {
          return CasesEnum.pascalCase;
        }
      } else if (valArray[0].toLowerCase() === valArray[0]) {
        if (checkIfSomeLettersUppercase(valArray)) {
          return CasesEnum.camelCase;
        }
      }
    }
  }
  return "All";
};
