import { Selection, TextEditorEdit } from "vscode";

const replaceInEditor = (
  edit: TextEditorEdit,
  selection: Selection,
  text: string
) => {
  edit.replace(selection, text);
};

export default replaceInEditor;
