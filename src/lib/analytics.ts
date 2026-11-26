type ContactEvent = "book_call" | "whatsapp" | "form_submit";

type ContactEventDetail = {
  name: ContactEvent;
  location: string;
};

/** Track a user action without collecting form contents or contact details. */
export function trackContactEvent(name: ContactEvent, location: string) {
  if (typeof window === "undefined") return;

  // TODO: Connect avl:contact to the site's analytics provider when one is installed.
  window.dispatchEvent(
    new CustomEvent<ContactEventDetail>("avl:contact", {
      detail: { name, location },
    })
  );
}
