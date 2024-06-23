# Features

## Existing Features

-Text Case Converter: Excellent for quick case changes (uppercase, lowercase, title case, etc.).
-Text Analyzer: Useful for content creators and writers to track word count, characters, and specific components like symbols and numbers.
-Random Text Generator: Helpful for creating placeholder content, testing layouts, or generating mock data.

## Case Conversions

### Cases Conversions

    - [] Upper Case: THIS IS UPPER CASE
        - isUppercase
    - [] Lower Case: this is lower case
        - isLowercase
    - [] Sentence Case: This is sentence case
        - [0] isUppercase
        - Others isLowercase
    - [] Title Case: This Is Title Case
        - After space is isUppercase 
        - Others isLowercase
    - [] Snake Case: this_is_snake_case
        - isLowercase
        - hasUnderscore
    - [] Kebab Case: this-is-kebab-case
        - isLowercase
        - hasHyphen
    - [] Pascal Case: ThisIsPascalCase
        - [0] isUppercase
        - also has more isUpperCase
    - [] Camel Case: thisIsCamelCase
        - [0] isLowercase
        - also has more isUpperCase
    - [] Upper Snake Case: THIS_IS_UPPER_SNAKE_CASE
        - isLowercase
        - hasUnderscore
    - [] Screaming Snake Case: THIS-IS-SCREAMING-SNAKE-CASE
        - isLowercase
        - hasHyphen

### Checks

    - [X] Extract Current Case (check for [spaces, `-`, `_`] send boolean object for cases)
    - [X] Check Current Case(if more than one case boolean received then error)
    - [] Divide the words
    - [] Check Expected Case(from list, if supported)
    - [] Convert the Case

## Additional Functionality Ideas

-Text Cleaning and Formatting:
    -Remove extra spaces
    -Trim leading/trailing whitespace
    -Sort lines alphabetically/numerically
    -Convert tabs to spaces (or vice versa)
    -Remove duplicate lines

-Search and Replace:
    -Regular expressions support
    -Replace across multiple files
    -Case-sensitive search options

-Text Statistics:
    -Character frequency analysis
    -Flesch-Kincaid readability score estimation
    -Word distribution analysis

-Collaboration Features:
    -Share snippets or text selections easily
    -Real-time co-editing (if technically feasible)

-Advanced Formatting:
    -Convert numbers to words (e.g., 10 -> ten)
    -Extract email addresses, phone numbers, URLs from text
    -Convert text to different number formats (e.g., currency, percentages)
    -Sort lines alphabetically/numerically
