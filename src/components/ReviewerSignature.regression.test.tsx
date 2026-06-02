import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Hero from "@/components/Hero";
import BancarioSection from "@/components/BancarioSection";

const REVIEWED_BY = /Revisado por\s+Dr\.?\s+Thiago Cantarelli\s+•\s+Janeiro 2026/i;

describe("Regression: removed 'Revisado por' signature", () => {
  it("does not render the reviewer signature in Hero", () => {
    const { container } = render(<Hero />);
    expect(container.textContent).not.toMatch(REVIEWED_BY);
  });

  it("does not render the reviewer signature in BancarioSection", () => {
    const { container } = render(<BancarioSection />);
    expect(container.textContent).not.toMatch(REVIEWED_BY);
  });

  it("does not contain the 'Janeiro 2026' review marker in either section", () => {
    const hero = render(<Hero />);
    expect(hero.container.textContent).not.toContain("Revisado por");
    const banc = render(<BancarioSection />);
    expect(banc.container.textContent).not.toContain("Revisado por");
  });
});
