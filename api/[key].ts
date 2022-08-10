import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis'


export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { key } = req.query

  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL as string,
    token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
  })

  const data = await redis.get(key as string);
  console.log(data)

  res.status(200).send(key);
};