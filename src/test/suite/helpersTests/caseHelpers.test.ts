import * as assert from "assert";
import { describe, it } from "mocha";
import { checkCase } from "../../../helpers/caseHelpers";
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
  });
}
