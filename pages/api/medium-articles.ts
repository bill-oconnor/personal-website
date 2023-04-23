import { NextApiRequest, NextApiResponse } from "next";
const url = "https://mediumpostsapi.vercel.app/api/williamoconnor-78759";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const options = {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${integrationToken}`,
      "Content-Type": "application/json",
    },
  };

  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      const posts = data.dataMedium;
      res.status(200).json(
        posts.map((post: any) => ({
          id: `${post.date}/${post.title}`,
          href: post.link,
          title: post.title,
          description: post.description,
          tags: post.tags,
          type: "blog",
          image: post.image.indexOf("placehold.jp") > -1 ? "" : post.image,
        }))
      );
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
}
// https://api.medium.com/v1/users/1509d5d43c09c09b879dd0227272254d9efd5c8a8c8debe778d52387d780eaa44/posts?status=published
