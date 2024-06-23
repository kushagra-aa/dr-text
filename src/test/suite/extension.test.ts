import * as vscode from "vscode";
import conversionControllerTests from "./helpersTests/caseHelpers.test";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  conversionControllerTests();
});
