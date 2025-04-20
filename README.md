# Dr. Text - Your Enhanced Text Editing Sidekick in VS Code

**From the creator of ['Wrap It'][wrapit] and an absolute hidden gem ['REMifyy'][remifyy]!**

Tired of repetitive text manipulations and wishing for more power at your fingertips within VS Code? **Dr. Text** is here to boost your productivity by providing a collection of handy text editing features, with a strong emphasis on leveraging VS Code's fantastic multi-cursor capabilities.

This extension aims to augment the built-in text editing prowess of VS Code, tackling those little frustrations and saving you precious time. As a fellow enthusiast of multi-cursor, I felt the need for more focused tools to streamline common tasks. More features are on the way!

[Download for Visual Studio Code][drtext]

## Features

### ⚙️ Case Conversion (`dr-text.caseConvert`)

Effortlessly transform the case of your selected text. Whether you're refactoring variable names or standardizing your writing, Dr. Text has you covered. Supports multiple cursors for simultaneous case changes across selections!

**Supported Cases:**

* `upperCase` (HELLO WORLD)
* `lowerCase` (hello world)
* `sentenceCase` (This is a sentence.)
* `titleCase` (This Is a Title Case Example)
* `snakeCase` (this_is_snake_case)
* `kebabCase` (this-is-kebab-case)
* `pascalCase` (ThisIsPascalCase)
* `camelCase` (thisIsCamelCase)
* `upperSnakeCase` (THIS_IS_UPPER_SNAKE_CASE)
* `screamingSnakeCase` (THIS-IS-SCREAMING-SNAKE-CASE)

**Use Cases:**

* Quickly standardize variable naming conventions (e.g., converting from `camelCase` to `pascalCase` across multiple variable declarations).
* Formatting titles and headings.
* Preparing text for different coding styles or output formats.

### 🔢 Log Cursor Numbers (`dr-text.logCursorNumbers`)

Streamline your debugging workflow! This command pastes sequential index numbers (1, 2, 3, ...) at each of your active cursors.

**Use Cases:**

* Easily identify the output of multiple `console.log()` statements when debugging loops or asynchronous operations.
* Quickly number list items or similar sequences across multiple lines.
* Best used with multiple cursors for maximum efficiency.

**Example:**

Select multiple instances of `console.log("Log: |")` and run this command to get:

```javascript
console.log("Log: 1")
console.log("Log: 2")
console.log("Log: 3")
// ... and so on
```

### ⏪ Log Reverse Cursor Numbers (`dr-text.logReverseCursorNumbers`)

Similar to "Log Cursor Numbers," but pastes numbers in reverse order (e.g., if you have 5 cursors, it will paste 5, 4, 3, 2, 1).

**Use Cases:**

* Useful in scenarios where you need to identify the order of execution or elements in reverse.
* Works seamlessly with multiple cursors.

### 🧹 Text Cleaning and Formatting (Coming Soon!)

Stay tuned for features that will help you clean and format your text with ease:

* Removing extra spaces.
* Trimming leading and trailing whitespace.
* Sorting lines alphabetically or numerically.
* Converting between tabs and spaces.
* Removing duplicate lines.

### 📊 Text Statistics (Coming Soon!)

Gain insights into your text with upcoming statistical analysis tools, such as:

* Character frequency analysis.

### ✨ And Many More

The journey of Dr. Text is just beginning! I'm constantly exploring new ways to enhance your text editing experience in VS Code.

## How to Use It

1. **Select Text (for Case Conversion):** Highlight the text you want to modify. For "Log Cursor Numbers," place your cursors where you want the numbers to appear.
2. **Open Command Palette:** Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> (Windows/Linux) or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> (Mac).
3. **Type the Command:**
    * For Case Conversion, type "Dr. Text: Convert Case" and select the desired case from the list.
    * For Logging Cursor Numbers, type "Dr. Text: Log Cursor Numbers" and press Enter.
    * For Logging Reverse Cursor Numbers, type "Dr. Text: Log Reverse Cursor Numbers" and press Enter.

## Commands

* `Text: Case Change` (`dr-text.caseConvert`): Opens a quick pick menu to select the desired case conversion for the selected text.
* `Text: Log Cursor Index` (`dr-text.logCursorNumbers`): Pastes sequential numbers (1, 2, 3...) at each active cursor position.
* `Text: Log Reverse Cursor Index` (`dr-text.logReverseCursorNumbers`): Pastes sequential numbers in reverse order (..., 3, 2, 1) at each active cursor position.

## Contributing

Your ideas and contributions are highly valued!

* **Report Bugs:** If you encounter any issues, please create a detailed issue on the [GitHub Repository][drtextgh].
* **Suggest Features:** Have a brilliant idea for a new text editing enhancement? Let's hear it! Create an issue with your suggestion.
* **Pull Requests:** I welcome pull requests for bug fixes and new features. Please read the [Contribution Guide](./contribution.md) for guidelines.

## Repository & Feedback

Please report issues, suggest features, and contribute to the development of Dr. Text on the repository page.

[GitHub Repository][drtextgh]

## Let's Connect & Collaborate

I'm excited to build Dr. Text into a powerful companion for VS Code users. Tell me what features *you* would love to see in this extension! Maybe we can work together to make VS Code even more powerful and efficient for everyone.

You can connect with me here:

Kushagra Agnihotri

Please Visit [Here][portfolio] for additional information

[wrapit]: https://marketplace.visualstudio.com/items?itemName=kushagra-aa.wrap-it
[remifyy]: https://marketplace.visualstudio.com/items?itemName=kushagra-aa.remifyy
[drtext]: https://marketplace.visualstudio.com/items?itemName=kushagra-aa.dr-text
[drtextgh]: https://github.com/kushagra-aa/dr-text
[portfolio]: https://kushagra-aa.vercel.app/
