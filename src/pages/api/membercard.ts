import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: any
) {
  // res.status(200).json({ message: 'Hello from Next.js!' })
  const filePath = path.resolve('public/membercard.svg');
  const imageBuffer = fs.readFileSync(filePath);

  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(imageBuffer);
}