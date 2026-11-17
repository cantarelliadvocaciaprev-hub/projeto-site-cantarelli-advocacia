import { trackEvent } from "@/lib/analytics";
const MAP = { click_phone: "phone_click", contact_form_submit: "form_submit", click_directions: "directions_click" } as const;
export function trackContactEvent(event: keyof typeof MAP) {
  trackEvent(MAP[event]);
}
