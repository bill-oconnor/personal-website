// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method?.toLowerCase() === "post") {
    const body = JSON.parse(req.body);

    /**
     * Send the email message body.message from body.email
     */
    console.log({ body });

    res.status(200).json({});
  }
}
