import * as assert from "assert";
import { describe, it } from "mocha";
import { checkCase, divideStringIntoArray } from "../../../helpers/caseHelpers";
import CasesEnum from "../../../types/cases";

export default function conversionControllerTests() {
  describe("Check 'caseHelper' functions", () => {
    describe("checkCase()", () => {
      it(`'THIS IS UPPER CASE' is 'Upper Case'`, () => {
        const result = checkCase("THIS IS UPPER CASE");
        assert.equal(result, CasesEnum.upperCase);
      });
      it(`'this is lower case' is 'Lower Case'`, () => {
        const result = checkCase("this is lower case");
        assert.equal(result, CasesEnum.lowerCase);
      });
      it(`'This is sentence case' is 'Sentence Case'`, () => {
        const result = checkCase("This is sentence case");
        assert.equal(result, CasesEnum.sentenceCase);
      });
      it(`'This Is Title Case' is 'Title Case'`, () => {
        const result = checkCase("This Is Title Case");
        assert.equal(result, CasesEnum.titleCase);
      });
      it(`'this_is_snake_case' is 'Snake Case'`, () => {
        const result = checkCase("this_is_snake_case");
        assert.equal(result, CasesEnum.snakeCase);
      });
      it(`'this-is-kebab-case' is 'Kebab Case'`, () => {
        const result = checkCase("this-is-kebab-case");
        assert.equal(result, CasesEnum.kebabCase);
      });
      it(`'THIS_IS_UPPER_SNAKE_CASE' is 'Upper Snake Case'`, () => {
        const result = checkCase("THIS_IS_UPPER_SNAKE_CASE");
        assert.equal(result, CasesEnum.upperSnakeCase);
      });
      it(`'THIS-IS-SCREAMING-SNAKE-CASE' is 'Screaming Snake Case'`, () => {
        const result = checkCase("THIS-IS-SCREAMING-SNAKE-CASE");
        assert.equal(result, CasesEnum.screamingSnakeCase);
      });
      it(`'ThisIsPascalCase' is 'Pascal Case'`, () => {
        const result = checkCase("ThisIsPascalCase");
        assert.equal(result, CasesEnum.pascalCase);
      });
      it(`'thisIsCamelCase' is 'Camel Case'`, () => {
        const result = checkCase("thisIsCamelCase");
        assert.equal(result, CasesEnum.camelCase);
      });
      it(`'this isInvalid Case' is Invalid Case`, () => {
        const result = checkCase("this isInvalid Case");
        assert.equal(result, "All");
      });
      it(`'this isInvalid_Case' is Invalid Case`, () => {
        const result = checkCase("this isInvalid_Case");
        assert.equal(result, "All");
      });
      it(`'this - isInvalid_Case' is Invalid Case`, () => {
        const result = checkCase("this - isInvalid_Case");
        assert.equal(result, "All");
      });
      it(`'An_other_invalid_CASE' is Invalid Case`, () => {
        const result = checkCase("An_other_invalid_CASE");
        assert.equal(result, "All");
      });
      it(`'An-other-invalid-CASE' is Invalid Case`, () => {
        const result = checkCase("An-other-invalid-CASE");
        assert.equal(result, "All");
      });
    });
    describe("divideStringIntoArray()", () => {
      it(`'THIS IS UPPER CASE' is ["THIS", "IS", "UPPER", "CASE"]`, () => {
        const result = divideStringIntoArray(
          "THIS IS UPPER CASE",
          CasesEnum.upperCase
        );
        assert.deepEqual(result, ["THIS", "IS", "UPPER", "CASE"]);
      });
      it(`'this is lower case' is ["this", "is", "lower", "case"]`, () => {
        const result = divideStringIntoArray(
          "this is lower case",
          CasesEnum.lowerCase
        );
        assert.deepEqual(result, ["this", "is", "lower", "case"]);
      });
      it(`'This is. Another sentence.' is ["This is. ", "Another sentence."]`, () => {
        const result = divideStringIntoArray(
          "This is. Another sentence.",
          CasesEnum.sentenceCase
        );
        assert.deepEqual(result, ["This is. ", "Another sentence."]);
      });
      it(`'This Is Title Case' is ["This", "Is", "Title", "Case"]`, () => {
        const result = divideStringIntoArray(
          "This Is Title Case",
          CasesEnum.titleCase
        );
        assert.deepEqual(result, ["This", "Is", "Title", "Case"]);
      });
      it(`'this_is_snake_case' is ["this", "is", "snake", "case"]`, () => {
        const result = divideStringIntoArray(
          "this_is_snake_case",
          CasesEnum.snakeCase
        );
        assert.deepEqual(result, ["this", "is", "snake", "case"]);
      });
      it(`'this-is-kebab-case' is ["this", "is", "kebab", "case"]`, () => {
        const result = divideStringIntoArray(
          "this-is-kebab-case",
          CasesEnum.kebabCase
        );
        assert.deepEqual(result, ["this", "is", "kebab", "case"]);
      });
      it(`'THIS_IS_UPPER_SNAKE_CASE' is ["THIS", "IS", "UPPER", "SNAKE","CASE"]`, () => {
        const result = divideStringIntoArray(
          "THIS_IS_UPPER_SNAKE_CASE",
          CasesEnum.upperSnakeCase
        );
        assert.deepEqual(result, ["THIS", "IS", "UPPER", "SNAKE", "CASE"]);
      });
      it(`'THIS-IS-SCREAMING-SNAKE-CASE' is ["THIS", "IS", "SCREAMING", "SNAKE","CASE"]`, () => {
        const result = divideStringIntoArray(
          "THIS-IS-SCREAMING-SNAKE-CASE",
          CasesEnum.screamingSnakeCase
        );
        assert.deepEqual(result, ["THIS", "IS", "SCREAMING", "SNAKE", "CASE"]);
      });
      it(`'ThisIsPascalCase' is ["This", "Is", "Pascal", "Case"]`, () => {
        const result = divideStringIntoArray(
          "ThisIsPascalCase",
          CasesEnum.pascalCase
        );
        assert.deepEqual(result, ["This", "Is", "Pascal", "Case"]);
      });
      it(`'thisIsCamelCase' is ["this", "Is", "Camel", "Case"]`, () => {
        const result = divideStringIntoArray(
          "thisIsCamelCase",
          CasesEnum.camelCase
        );
        assert.deepEqual(result, ["this", "Is", "Camel", "Case"]);
      });
      // Harder tests for Camel - Pascal
      it(`'itIsntASimpleCase' is ["it", "Isnt", "A", "Simple", "Case"]`, () => {
        const result = divideStringIntoArray(
          "itIsntASimpleCase",
          CasesEnum.camelCase
        );
        assert.deepEqual(result, ["it", "Isnt", "A", "Simple", "Case"]);
      });
    });
  });
}
