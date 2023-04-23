import { mediumURL } from "./constants";

export function getContentFromCMS() {
  return fetch(mediumURL).then((r) => r.json());
}
