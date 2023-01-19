import { contactURL } from "./constants";

export function submitContactMessage(email: string, message: string) {
  return fetch(contactURL, {
    method: "POST",
    body: JSON.stringify({ email, message }),
  }).then((r) => r.json());
}
