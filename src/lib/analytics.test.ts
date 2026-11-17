import { describe, it, expect } from "vitest";
import { classifyLink } from "./analytics";
const o = "https://cantarelliadvocacia.com.br";
describe("classifyLink", () => {
  it("whatsapp", () => expect(classifyLink("https://wa.me/5581983421727?text=x", o)).toBe("whatsapp_click"));
  it("phone", () => expect(classifyLink("tel:+558130493799", o)).toBe("phone_click"));
  it("email", () => expect(classifyLink("mailto:a@b.com", o)).toBe("email_click"));
  it("maps", () => expect(classifyLink("https://www.google.com/maps/dir/?api=1", o)).toBe("directions_click"));
  it("outbound", () => expect(classifyLink("https://gov.br/inss", o)).toBe("outbound_click"));
  it("internal ignored", () => expect(classifyLink("/blog", o)).toBeNull());
});
