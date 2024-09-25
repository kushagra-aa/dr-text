import * as assert from "assert";
import { describe, it } from "mocha";
import conversionHelper from "../../../helpers/conversionHelper";
import CasesEnum from "../../../types/cases";

export default function conversionHelpersTests() {
  describe("Check 'conversionHelpers' function", () => {
    it(`"this Is Upper Case" to 'THIS IS UPPER CASE'`, () => {
      const result = conversionHelper(
        "this Is Upper Case",
        CasesEnum.upperCase
      );
      assert.deepEqual(result, "THIS IS UPPER CASE");
    });
    it(`"this Is Lower Case" to 'this is lower case'`, () => {
      const result = conversionHelper(
        "this Is Lower Case",
        CasesEnum.lowerCase
      );
      assert.deepEqual(result, "this is lower case");
    });
    it(`"THIS IS KEBAB CASE" to 'this-is-kebab-case'`, () => {
      const result = conversionHelper(
        "THIS IS KEBAB CASE",
        CasesEnum.kebabCase
      );
      assert.deepEqual(result, "this-is-kebab-case");
    });
    it(`"THIS IS SNAKE CASE" to 'this_is_snake_case'`, () => {
      const result = conversionHelper(
        "THIS IS SNAKE CASE",
        CasesEnum.snakeCase
      );
      assert.deepEqual(result, "this_is_snake_case");
    });
    it(`"this is screaming snake case" to 'THIS-IS-SCREAMING-SNAKE-CASE'`, () => {
      const result = conversionHelper(
        "this is screaming snake case",
        CasesEnum.screamingSnakeCase
      );
      assert.deepEqual(result, "THIS-IS-SCREAMING-SNAKE-CASE");
    });
    it(`"this is upper snake case" to 'THIS_IS_UPPER_SNAKE_CASE'`, () => {
      const result = conversionHelper(
        "this is upper snake case",
        CasesEnum.upperSnakeCase
      );
      assert.deepEqual(result, "THIS_IS_UPPER_SNAKE_CASE");
    });
    it(`["this is title case" to 'This Is Title Case'`, () => {
      const result = conversionHelper(
        "this is title case",
        CasesEnum.titleCase
      );
      assert.deepEqual(result, "This Is Title Case");
    });
    it(`"this is sentence case" to 'This. Is. Sentence. Case.'`, () => {
      const result = conversionHelper(
        "this is sentence case",
        CasesEnum.sentenceCase
      );
      assert.deepEqual(result, "This. Is. Sentence. Case.");
    });
    it(`"this is pascal case" to 'ThisIsPascalCase'`, () => {
      const result = conversionHelper(
        "this is pascal case",
        CasesEnum.pascalCase
      );
      assert.deepEqual(result, "ThisIsPascalCase");
    });
    it(`"this is camel case" to 'thisIsCamelCase'`, () => {
      const result = conversionHelper(
        "this is camel case",
        CasesEnum.camelCase
      );
      assert.deepEqual(result, "thisIsCamelCase");
    });
  });
}
