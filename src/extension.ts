import * as vscode from "vscode";

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "dr-text.caseConvert",
    () => {
      vscode.window.showInformationMessage("Hello World from dr-text!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
