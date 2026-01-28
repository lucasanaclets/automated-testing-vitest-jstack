import { expect, it } from "vitest";
import { validateEmail } from "./validateEmail";

it.each(["", "invalid", "invalid@", "invalid@inv", "invalid#@inv.inv"])(
  "should return false for invalid emails: $0",
  (email) => {
    const isValid = validateEmail(email);

    expect(isValid).toBe(false);
  },
);

it.each(["valid@val.val", "valid_email@val.val", "valid+email@val.val"])(
  "should return true for valid emails: $0",
  (email) => {
    const isValid = validateEmail(email);

    expect(isValid).toBe(true);
  },
);
