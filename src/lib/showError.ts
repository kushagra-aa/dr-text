import { window } from "vscode";

const showError = (text: string, err: unknown) =>
  window.showErrorMessage(text + err);
export const handleError = (err: unknown) =>
  showError(`Dr.Text Exclaims: Conversion Filed!`, err);

export default showError;
