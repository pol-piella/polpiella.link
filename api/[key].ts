import { Redis } from "@upstash/redis";

export const config = {
  runtime: "edge",
};

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
});

export default async function handler(req: Request) {
  const searchParams = new URL(req.url).searchParams;
  const key = searchParams.get("key");

  try {
    if (!key) {
      return new Response("Missing argument `key`", { status: 400 });
    }

    const url: string | null = await redis.get(key);

    if (!url)
      return new Response(`Could not find a url with key ${key}`, {
        status: 404,
      });

    return Response.redirect(url);
  } catch (e) {
    return new Response(JSON.stringify({ error: e }), { status: 500 });
  }
}
