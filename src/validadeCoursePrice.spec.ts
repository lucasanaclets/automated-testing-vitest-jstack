import { expect, it } from "vitest";
import { validateCoursePrice } from "./validadeCoursePrice";

it("should return true for valid prices", () => {
  const isValid = validateCoursePrice(1);

  expect(isValid).toBe(true);
});

it("should throw if a negative number is provided", () => {
  const runValidateCoursePrice = () => validateCoursePrice(-10);

  expect(runValidateCoursePrice).throw("Price cannot be a negative number");
});
