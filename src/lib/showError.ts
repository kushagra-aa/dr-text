import { window } from "vscode";

const showError = (text: string) => window.showErrorMessage(`${text}`);
export const handleError = (text: string) =>
  showError(`Dr.Text Exclaims: Conversion Filed! ${text}`);

export default showError;
