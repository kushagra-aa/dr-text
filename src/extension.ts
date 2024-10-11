import * as vscode from "vscode";
import {
  caseConverterController,
  cursorIndexController,
} from "./commandControllers";

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  let convertDisposable = vscode.commands.registerCommand(
    "dr-text.caseConvert",
    caseConverterController
  );
  let cursorIndexDisposable = vscode.commands.registerCommand(
    "dr-text.logCursorNumbers",
    cursorIndexController
  );

  context.subscriptions.push(convertDisposable, cursorIndexDisposable);
}

export function deactivate() {}
