import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

describe("Contact keyboard navigation", () => {
  it("tabs through every interactive element in DOM order without jumps or traps", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    // The natural tab sequence from the contact info column to the form.
    const whatsappButton = screen.getByRole("button", { name: /chamar no whatsapp/i });
    const phoneLink = screen.getByRole("link", { name: /3049-3799/i });
    const emailLink = screen.getByRole("link", { name: /contato@cantarelliadvocacia/i });
    const nameInput = screen.getByPlaceholderText(/nome completo/i);
    const emailInput = screen.getByPlaceholderText(/^e-mail/i);
    const phoneInput = screen.getByRole("textbox", { name: /^whatsapp$/i });
    const messageInput = screen.getByRole("textbox", { name: /assunto da mensagem/i });
    const privacyLink = screen.getByRole("link", { name: /política de privacidade/i });
    const submitButton = screen.getByRole("button", { name: /enviar mensagem/i });

    const order = [
      phoneLink,
      whatsappButton,
      emailLink,
      nameInput,
      emailInput,
      phoneInput,
      messageInput,
      privacyLink,
      submitButton,
    ];

    // Forward tabbing should visit each element in order, ending at WhatsApp's
    // sibling chain through to the submit button.
    document.body.focus();
    for (const el of order) {
      await user.tab();
      expect(el).toHaveFocus();
    }

    // Shift+Tab from the form should return up to the WhatsApp button without
    // skipping the contact links (no focus trap, no jumps).
    const reverse = [...order].reverse();
    for (let i = 1; i < reverse.length; i++) {
      await user.tab({ shift: true });
      expect(reverse[i]).toHaveFocus();
    }
    expect(phoneLink).toHaveFocus();
  });

  it("uses no positive tabIndex values that would break the tab order", () => {
    const { container } = render(<Contact />);
    const positive = Array.from(container.querySelectorAll("[tabindex]")).filter(
      (el) => Number(el.getAttribute("tabindex")) > 0,
    );
    expect(positive).toHaveLength(0);
  });

  it("has no nested buttons or links", () => {
    const { container } = render(<Contact />);
    expect(container.querySelector("button button")).toBeNull();
    expect(container.querySelector("a a")).toBeNull();
    expect(container.querySelector("button a, a button")).toBeNull();
  });
});
