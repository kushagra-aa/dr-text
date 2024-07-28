import getInput from "./lib/getInput";
import { CASE_OPTIONS } from "./constants";
import getQuickPick from "./lib/getQuickPick";
import showError, { handleError } from "./lib/showError";
import copyToClipboard from "./lib/copyToClipboard";
import getSelection from "./lib/getSelections";
import replaceInEditor from "./lib/replaceInEditor";
import { window } from "vscode";
import conversionController from "./helpers/conversionHelper";
import { validateOptions } from "./helpers/validators";

// Expected expression : `THIS IS UPPER CASE`
const caseConverterController = async () => {
  try {
    const editor = window.activeTextEditor;
    if (!editor || editor === null) {
      return;
    }

    const selections = getSelection(editor);
    if (selections.length > 0) {
      let expectedCaseInput = await getQuickPick(
        CASE_OPTIONS,
        `Select the expected Case Eg:'${CASE_OPTIONS[0]}'`
      );
      editor.edit((e) => {
        selections.forEach(async (selection) => {
          // const { expectedCase, currentCase, currentValue } = validateOptions(
          //   selection.text,
          //   expectedCaseInput
          // );
          // if (!expectedCase || !currentCase || !currentValue) {
          //   return;
          // }
          const result = conversionController();
          // currentValue,
          // currentCase,
          // expectedCase
          await replaceInEditor(e, selection.selection, result);
        });
      });
    } else {
      let expression = (await getInput("Enter string")) || "";
      let expectedCaseInput = await getQuickPick(
        CASE_OPTIONS,
        `Select the expected Case Eg:'${CASE_OPTIONS[0]}'`
      );
      // const { expectedCase, currentCase, currentValue } = validateOptions(
      //   expression,
      //   expectedCaseInput
      // );
      // if (!expectedCase || !currentCase || !currentValue) {
      //   return;
      // }
      const result = conversionController();
      // currentValue,
      // currentCase,
      // expectedCase
      await copyToClipboard(`${result}`);
    }
  } catch (e) {
    handleError(e as string);
  }
};

export { caseConverterController };
