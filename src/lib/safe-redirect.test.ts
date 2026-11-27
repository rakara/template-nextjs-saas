import { describe, expect, it } from "vitest";
import { getSafeRedirectPath } from "@/lib/safe-redirect";

describe("getSafeRedirectPath", () => {
  it("allows same-origin absolute paths with query and hash", () => {
    expect(getSafeRedirectPath("/dashboard?tab=usage#billing")).toBe(
      "/dashboard?tab=usage#billing",
    );
  });

  it("falls back for external and protocol-relative URLs", () => {
    expect(getSafeRedirectPath("https://attacker.example")).toBe("/dashboard");
    expect(getSafeRedirectPath("//attacker.example")).toBe("/dashboard");
  });

  it("rejects backslash-based redirect tricks", () => {
    expect(getSafeRedirectPath("/\\\\attacker.example")).toBe("/dashboard");
  });

  it("supports a caller-provided fallback", () => {
    expect(getSafeRedirectPath(null, "/")).toBe("/");
  });
});
