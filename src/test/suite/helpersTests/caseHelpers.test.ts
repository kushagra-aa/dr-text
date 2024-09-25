import * as assert from "assert";
import { describe, it } from "mocha";
import {
  checkCase,
  convertCase,
  divideStringIntoArray,
} from "../../../helpers/caseHelpers";
import CasesEnum from "../../../types/cases";

export default function caseHelpersTests() {
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
    describe("convertCase()", () => {
      it(`["this", "Is", "Upper", "Case"] is 'THIS IS UPPER CASE'`, () => {
        const result = convertCase(
          ["this", "Is", "Upper", "Case"],
          CasesEnum.upperCase
        );
        assert.deepEqual(result, "THIS IS UPPER CASE");
      });
      it(`["this", "Is", "Lower", "Case"] is 'this is lower case'`, () => {
        const result = convertCase(
          ["this", "Is", "Lower", "Case"],
          CasesEnum.lowerCase
        );
        assert.deepEqual(result, "this is lower case");
      });
      it(`["THIS", "IS", "KEBAB", "CASE"] is 'this-is-kebab-case'`, () => {
        const result = convertCase(
          ["THIS", "IS", "KEBAB", "CASE"],
          CasesEnum.kebabCase
        );
        assert.deepEqual(result, "this-is-kebab-case");
      });
      it(`["THIS", "IS", "SNAKE", "CASE"] is 'this_is_snake_case'`, () => {
        const result = convertCase(
          ["THIS", "IS", "SNAKE", "CASE"],
          CasesEnum.snakeCase
        );
        assert.deepEqual(result, "this_is_snake_case");
      });
      it(`["this", "is", "screaming", "snake", "case"] is 'THIS-IS-SCREAMING-SNAKE-CASE'`, () => {
        const result = convertCase(
          ["this", "is", "screaming", "snake", "case"],
          CasesEnum.screamingSnakeCase
        );
        assert.deepEqual(result, "THIS-IS-SCREAMING-SNAKE-CASE");
      });
      it(`["this", "is", "upper", "snake", "case"] is 'THIS_IS_UPPER_SNAKE_CASE'`, () => {
        const result = convertCase(
          ["this", "is", "upper", "snake", "case"],
          CasesEnum.upperSnakeCase
        );
        assert.deepEqual(result, "THIS_IS_UPPER_SNAKE_CASE");
      });
      it(`["this", "is", "title", "case"] is 'This Is Title Case'`, () => {
        const result = convertCase(
          ["this", "is", "title", "case"],
          CasesEnum.titleCase
        );
        assert.deepEqual(result, "This Is Title Case");
      });
      it(`["this", "is", "sentence", "case"] is 'This. Is. Sentence. Case.'`, () => {
        const result = convertCase(
          ["this", "is", "sentence", "case"],
          CasesEnum.sentenceCase
        );
        assert.deepEqual(result, "This. Is. Sentence. Case.");
      });
      it(`["this", "is", "pascal", "case"] is 'ThisIsPascalCase'`, () => {
        const result = convertCase(
          ["this", "is", "pascal", "case"],
          CasesEnum.pascalCase
        );
        assert.deepEqual(result, "ThisIsPascalCase");
      });
      it(`["this", "is", "camel", "case"] is 'thisIsCamelCase'`, () => {
        const result = convertCase(
          ["this", "is", "camel", "case"],
          CasesEnum.camelCase
        );
        assert.deepEqual(result, "thisIsCamelCase");
      });
    });
  });
}
