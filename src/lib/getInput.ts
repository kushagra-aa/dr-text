import { window } from "vscode";

const getInput = async (placeHolder: string) =>
  await window.showInputBox({
    placeHolder,
  });

export default getInput;
