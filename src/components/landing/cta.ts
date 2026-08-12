export const EARLY_ACCESS_INPUT_ID = "email-input";

/** Every "Get early access" control lands on the one real email capture. */
export function focusEarlyAccess() {
  const input = document.getElementById(EARLY_ACCESS_INPUT_ID);
  if (!input) return;
  input.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => input.focus({ preventScroll: true }), 400);
}
