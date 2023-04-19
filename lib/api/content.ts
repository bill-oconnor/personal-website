import { mediumURL } from "./constants";

export async function getContentFromCMS() {
  const content = await fetch(mediumURL).then((r) => r.json());
  console.log({ content });
  return content;
  // return {};
}
