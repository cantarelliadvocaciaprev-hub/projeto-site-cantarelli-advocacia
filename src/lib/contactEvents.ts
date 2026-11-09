export function trackContactEvent(event: "click_phone" | "contact_form_submit" | "click_directions") {
  if (typeof window === "undefined") return;
  try {
    if (localStorage.getItem("cookie-consent") !== "accepted") return;
    window.gtag?.("event", event, { page_path: window.location.pathname });
  } catch { /* Contact must remain available when measurement is blocked. */ }
}