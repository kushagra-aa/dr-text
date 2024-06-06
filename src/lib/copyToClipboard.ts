import clipboardy from "clipboardy";
import showInfo from "./showInfo";

export default function copyToClipboard(text: string) {
  clipboardy.writeSync(text);
  showInfo("Result Copied to clipboard!");
}
