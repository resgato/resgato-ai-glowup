import { NextRequest } from 'next/server';

const PRERENDER_IPS = [
  '54.145.174.169',
  '54.145.115.36',
  '54.145.161.49',
  '54.145.242.27',
  '54.145.219.201',
  '54.145.123.147',
  '54.145.134.102',
];

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const userAgent = req.headers.get('user-agent') || '';
  const clientIp =
    req.headers.get('cf-connecting-ip') ||
    req.headers.get('x-forwarded-for') ||
    req.headers.get('x-real-ip');

  const isPrerender =
    userAgent.includes('Prerender') || PRERENDER_IPS.includes(clientIp || '');

  if (isPrerender) {
    console.log('Prerender request detected:', clientIp, userAgent);
  }

  // Return a response with the prerender status
  return new Response(JSON.stringify({ isPrerender }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
