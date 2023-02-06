import { get } from '@vercel/edge-config'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: Request) {
  const searchParams = new URL(req.url).searchParams
  const key = searchParams.get('key')

  try {
    if (!key) {
      return new Response('Missing argument `key`', { status: 400 })
    }

    const url: string | undefined = await get(key)

    if (!url)
      return new Response(`Could not find a url with key ${key}`, {
        status: 404,
      })

    return Response.redirect(url)
  } catch (e) {
    return new Response(JSON.stringify({ error: e }), { status: 500 })
  }
}
