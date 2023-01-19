// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const strapiURL = "http://localhost:1337/api";
const token = process.env.STRAPI_TOKEN;

type Data = {
  bio?: any;
  hero?: any;
  resources?: any;
  contact?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const options = {
    method: "GET",
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  Promise.all([
    fetch(`${strapiURL}/resources`, options)
      .then((response) => response.json())
      .then((r) => {
        return r?.data
          ?.map((d: any) => {
            return d.attributes;
          })
          .reduce(
            (mappedResources: any, resource: any) => {
              if (resource.type === "project") {
                mappedResources.projects.push(resource);
              } else if (resource.type === "talk") {
                mappedResources.projects.push(resource);
              } else if (resource.type === "blog") {
                mappedResources.projects.push(resource);
              } else if (resource.type === "course") {
                mappedResources.projects.push(resource);
              }

              return mappedResources;
            },
            { blogs: [], projects: [], talks: [], courses: [] }
          );
      }),
    fetch(`${strapiURL}/section-copies`, options)
      .then((response) => response.json())
      .then((r) => {
        return r?.data;
      }),
    fetch(`${strapiURL}/bio`, options)
      .then((response) => response.json())
      .then((r) => {
        return r?.data?.attributes;
      }),
  ]).then(([resources, sectionCopy, bio]) => {
    const { hero, contact } =
      !!sectionCopy && !!sectionCopy.reduce
        ? sectionCopy.reduce(
            (content: any, sectionContent: any) => {
              if (sectionContent?.attributes?.sectionName === "hero") {
                content.hero = sectionContent.attributes;
              } else if (
                sectionContent?.attributes?.sectionName === "contact"
              ) {
                content.contact = sectionContent.attributes;
              }
              return content;
            },
            { hero: {}, contact: {} }
          )
        : { hero: {}, contact: {} };

    res.status(200).json({ bio, hero, contact, resources });
  });
}
