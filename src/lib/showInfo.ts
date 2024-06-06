import { window } from "vscode";

const showInfo = (text: string) =>
  window.showInformationMessage(`Dr.Text Says: ${text}`);

export default showInfo;
