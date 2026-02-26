import { describe, it, expect } from "vitest";
import { escapeRegExp } from "../src/index.js";

describe("escapeRegExp", () => {
  it("escapes special regex characters", () => {
    expect(escapeRegExp("how much $ for a mass?")).toBe(
      "how much \\$ for a mass\\?",
    );
  });

  it("escapes pipe", () => {
    expect(escapeRegExp("a|b")).toBe("a\\|b");
  });

  it("escapes backslash", () => {
    expect(escapeRegExp("a\\b")).toBe("a\\\\b");
  });

  it("escapes curly braces", () => {
    expect(escapeRegExp("{1,2}")).toBe("\\{1,2\\}");
  });

  it("escapes parentheses", () => {
    expect(escapeRegExp("(group)")).toBe("\\(group\\)");
  });

  it("escapes square brackets", () => {
    expect(escapeRegExp("[class]")).toBe("\\[class\\]");
  });

  it("escapes caret", () => {
    expect(escapeRegExp("^start")).toBe("\\^start");
  });

  it("escapes dollar sign", () => {
    expect(escapeRegExp("end$")).toBe("end\\$");
  });

  it("escapes plus", () => {
    expect(escapeRegExp("a+b")).toBe("a\\+b");
  });

  it("escapes asterisk", () => {
    expect(escapeRegExp("a*b")).toBe("a\\*b");
  });

  it("escapes question mark", () => {
    expect(escapeRegExp("a?b")).toBe("a\\?b");
  });

  it("escapes dot", () => {
    expect(escapeRegExp("a.b")).toBe("a\\.b");
  });

  it("escapes hyphens", () => {
    expect(escapeRegExp("a-b")).toBe("a\\x2db");
  });

  it("handles strings with multiple special characters", () => {
    expect(escapeRegExp("hello.world (test) [1+1]")).toBe(
      "hello\\.world \\(test\\) \\[1\\+1\\]",
    );
  });

  it("returns plain strings unchanged", () => {
    expect(escapeRegExp("hello")).toBe("hello");
    expect(escapeRegExp("")).toBe("");
    expect(escapeRegExp("abc123")).toBe("abc123");
  });

  it("escaped strings work correctly in RegExp", () => {
    const special = "price is $5.00 (USD)";
    const escaped = escapeRegExp(special);
    const re = new RegExp(escaped);
    expect(re.test(special)).toBe(true);
    expect(re.test("price is 550 USD")).toBe(false);
  });

  it("throws on non-string input", () => {
    expect(() => escapeRegExp(42 as unknown as string)).toThrow(TypeError);
    expect(() => escapeRegExp(undefined as unknown as string)).toThrow(
      TypeError,
    );
  });
});
