import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis'


export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { key } = req.query

  console.log(key)

  const redis = new Redis({
    url: 'https://global-concrete-satyr-31044.upstash.io',
    token: 'AnlEASQgYzE0MzliOGUtNWFhNy00ZTFjLTgzYTEtZWRiNThkM2I4N2Vmx2YFZOSQ46v1Yn4-9nNlg6utv01LyVSrIxt8mWxoHuQ=',
  })

  const data = await redis.get(key as string);
  console.log(data)

  res.status(200).send(key);
};