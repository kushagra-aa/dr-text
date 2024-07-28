import * as vscode from "vscode";
import { caseConverterController } from "./commandControllers";

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "dr-text.caseConvert",
    caseConverterController
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
