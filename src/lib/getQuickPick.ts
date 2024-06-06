import { window } from "vscode";

const getQuickPick = async (
  options: any[],
  placeHolder: string
): Promise<string> =>
  await window
    .showQuickPick(options, {
      placeHolder,
    })
    .then((selectedOption) => {
      if (selectedOption) {
        // User selected an option
        return selectedOption;
        // Perform actions based on the selected option
      } else {
        // User canceled the selection
        return "";
      }
    });

export default getQuickPick;
