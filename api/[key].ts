import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis'

export const config = {
  runtime: 'experimental-edge',
};

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { key } = req.query

  try {
      const url = await redis.get(key as string);
      res.status(200).send({ url });
  } catch(e) {
    console.error(e)
    res.status(500).send('Oopsie Doopsie!')
  }
};