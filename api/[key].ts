import { Redis } from '@upstash/redis'

export const config = {
  runtime: 'experimental-edge',
};

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
})

export default async function handler(req: Request) {
  const searchParams = new URL(req.url).searchParams
  const key = searchParams.get('key')

  try {
      if (!key) {
        return new Response(JSON.stringify({ message: "Missing argument `key`" }), { status: 400 })
      }
      
      const url: string = await redis.get(key) ?? "/"

      return Response.redirect(url)
  } catch(e) {
    console.error(e)
  }
}