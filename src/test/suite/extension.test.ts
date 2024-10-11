import * as vscode from "vscode";
import caseHelpersTests from "./helpersTests/caseHelpers.test";
import conversionHelpersTests from "./helpersTests/conversionHelper.test";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  caseHelpersTests();
  conversionHelpersTests();
});
