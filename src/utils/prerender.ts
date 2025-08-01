import { createClient } from '@vercel/edge-config';

const PRERENDER_IPS = [
  '54.145.174.169',
  '54.145.115.36',
  '54.145.161.49',
  '54.145.242.27',
  '54.145.219.201',
  '54.145.123.147',
  '54.145.134.102'
];

export async function isPrerenderRequest(request: Request): Promise<boolean> {
  try {
    const userAgent = request.headers.get('user-agent') || '';
    const clientIp = request.headers.get('cf-connecting-ip') || 
                    request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip');

    return userAgent.includes('Prerender') || PRERENDER_IPS.includes(clientIp || '');
  } catch (error) {
    console.error('Error checking Prerender request:', error);
    return false;
  }
} 