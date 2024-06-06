import getInput from "./lib/getInput";
import { CASES_OPTIONS } from "./constants";
import getQuickPick from "./lib/getQuickPick";
import showError from "./lib/showError";
import copyToClipboard from "./lib/copyToClipboard";
import getSelection from "./lib/getSelections";
import replaceInEditor from "./lib/replaceInEditor";
import { window } from "vscode";
import conversionController from "./helpers/conversionHelpers";
import { validateOptions } from "./helpers/validators";

// Expected expression : 16px
const caseConverterController = async () => {
  try {
    const editor = window.activeTextEditor;
    if (!editor || editor === null) {
      return;
    }

    const selections = getSelection(editor);
    if (selections.length > 0) {
      let expectedCaseInput = await getQuickPick(
        CASES_OPTIONS,
        "Select the expected Case Eg:'rem'"
      );
      editor.edit((e) => {
        selections.forEach(async (selection) => {
          const { expectedCase, currentCase, currentValue } = validateOptions(
            selection.text,
            expectedCaseInput
          );
          if (!expectedCase || !currentCase || !currentValue) {
            return;
          }
          const result =
            conversionController();
            // currentValue,
            // currentCase,
            // expectedCase
          await replaceInEditor(e, selection.selection, result);
        });
      });
    } else {
      let expression = (await getInput("Enter string")) || "";
      let expectedCaseInput = await getQuickPick(
        CASES_OPTIONS,
        "Select the expected case Eg:'UpperCase'"
      );
      const { expectedCase, currentCase, currentValue } = validateOptions(
        expression,
        expectedCaseInput
      );
      if (!expectedCase || !currentCase || !currentValue) {
        return;
      }
      const result =
        conversionController();
        // currentValue,
        // currentCase,
        // expectedCase
      await copyToClipboard(`${result}`);
    }
  } catch (e) {
    showError("Oops! Something Went Sideways");
  }
};

export { caseConverterController };
