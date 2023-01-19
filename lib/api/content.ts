import { contentURL } from "./constants";

export async function getContentFromCMS() {
  const content = await fetch(contentURL).then((r) => r.json());
  return content;
}
