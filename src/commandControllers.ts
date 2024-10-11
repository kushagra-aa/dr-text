import getInput from "./lib/getInput";
import { CASE_OPTIONS } from "./constants";
import getQuickPick from "./lib/getQuickPick";
import showError, { handleError } from "./lib/showError";
import copyToClipboard from "./lib/copyToClipboard";
import getSelection from "./lib/getSelections";
import replaceInEditor from "./lib/replaceInEditor";
import { Selection, TextEditorEdit, window } from "vscode";
import conversionController from "./helpers/conversionHelper";
import { validateOptions } from "./helpers/validators";
import CasesEnum from "./types/cases";

// TODO: !editor or !selection

const handleExpectedCase = async (): Promise<CasesEnum | "All"> => {
  let expectedCaseInput = await getQuickPick(
    CASE_OPTIONS,
    `Select the expected Case Eg:'${CASE_OPTIONS[0]}'`
  );
  const expectedCase = validateOptions(expectedCaseInput);
  return expectedCase;
};
const handleNoEditorOrSelection = async () => {
  // ? If no editor is active || no selection then ask for text and copy to clipboard.
  let expression = (await getInput("Enter string")) || "";
  if (!expression || expression.trim() === "") {
    return;
  }
  let expectedCase = await handleExpectedCase();
  if (expectedCase === "All") {
    return;
  }
  const result = conversionController(expression, expectedCase);
  await copyToClipboard(`${result}`);
};

const handleConversion = async (
  e: TextEditorEdit,
  text: string,
  selection: Selection,
  expectedCase: CasesEnum
) => {
  const result = conversionController(text, expectedCase);
  await replaceInEditor(e, selection, result);
};

// Expected expression : `THIS IS UPPER CASE`
const caseConverterController = async () => {
  try {
    const editor = window.activeTextEditor;
    if (!editor || editor === null) {
      // ? If no editor is active || no selection then ask for text and copy to clipboard.
      await handleNoEditorOrSelection();
      return;
    }
    const selections = getSelection(editor);

    let expectedCase = await handleExpectedCase();
    if (expectedCase === "All") {
      return;
    }

    if (selections.length > 0) {
      editor.edit((e) => {
        selections.forEach(async (selection) => {
          await handleConversion(
            e,
            selection.text,
            selection.selection,
            expectedCase
          );
        });
      });
    } else {
      await handleNoEditorOrSelection();
    }
  } catch (e) {
    handleError(e as string);
  }
};

const cursorIndexController = async () => {
  try {
    const editor = window.activeTextEditor;
    if (!editor || editor === null) {
      throw new Error("No Editor Found!");
    }
    const selections = getSelection(editor);
    if (selections.length > 0) {
      editor.edit((e) => {
        selections.forEach(async (selection, i) => {
          await replaceInEditor(
            e,
            selection.selection,
            (selections.length - i).toString()
          );
        });
      });
    } else {
      throw new Error("No Cursors Found!");
    }
  } catch (e) {
    handleError(e as string);
  }
};

export { caseConverterController, cursorIndexController };
