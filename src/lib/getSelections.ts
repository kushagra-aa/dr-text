import { Selection, TextEditor, window } from "vscode";

export type SelectionsType = {
  selection: Selection;
  text: string;
};

const getSelectionText = (editor: TextEditor, selection: Selection): string =>
  editor.document.getText(selection);

const getSelection = (editor: TextEditor): SelectionsType[] => {
  let selections: SelectionsType[] = [];
  const editorSelections = editor.selections;
  if (!editorSelections) {
    return selections;
  }
  selections = editorSelections.map<SelectionsType>((selection) => ({
    text: getSelectionText(editor, selection),
    selection,
  }));
  return selections;
};

export default getSelection;
