import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis'

export const config = {
  runtime: 'experimental-edge',
};

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
})

export default async function handler(req: Request) {
  try {
      const url = await redis.get("blog");
      return new Response(
        JSON.stringify({
          message: `Hello, world! ${url}`,
        }),
        {
          status: 200,
          headers: {
            'content-type': 'application/json'
        }
        }
      )
  } catch(e) {
    console.error(e)
  }
}