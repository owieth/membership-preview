import type { NextApiRequest } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: any
) {
  const image = `<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  </svg>`
  var url = "data:image/svg+xml;base64," + Buffer.from(image, "utf-8").toString("base64")

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Content-Disposition', 'attachment');
  res.send(url);
}