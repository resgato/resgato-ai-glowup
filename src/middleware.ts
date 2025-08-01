import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PRERENDER_IPS = [
  '54.145.174.169',
  '54.145.115.36',
  '54.145.161.49',
  '54.145.242.27',
  '54.145.219.201',
  '54.145.123.147',
  '54.145.134.102'
];

const bots = [
  'googlebot',
  'yahoo! slurp',
  'bingbot',
  'yandex',
  'baiduspider',
  'facebookexternalhit',
  'twitterbot',
  'rogerbot',
  'linkedinbot',
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest/0.',
  'developers.google.com/+/web/snippet',
  'slackbot',
  'vkshare',
  'w3c_validator',
  'redditbot',
  'applebot',
  'whatsapp',
  'flipboard',
  'tumblr',
  'bitlybot',
  'skypeuripreview',
  'nuzzel',
  'discordbot',
  'google page speed',
  'qwantify',
  'pinterestbot',
  'bitrix link preview',
  'xing-contenttabreceiver',
  'chrome-lighthouse',
  'telegrambot',
  'OAI-SearchBot',
  'ChatGPT',
  'GPTBot',
  'Perplexity',
  'ClaudeBot',
  'Amazonbot',
  'integration-test'
];

const IGNORE_EXTENSIONS = [
  '.js', '.css', '.xml', '.less', '.png', '.jpg', '.jpeg', '.gif', '.pdf', '.doc',
  '.txt', '.ico', '.rss', '.zip', '.mp3', '.rar', '.exe', '.wmv', '.doc', '.avi',
  '.ppt', '.mpg', '.mpeg', '.tif', '.wav', '.mov', '.psd', '.ai', '.xls', '.mp4',
  '.m4a', '.swf', '.dat', '.dmg', '.iso', '.flv', '.m4v', '.torrent', '.woff',
  '.ttf', '.svg', '.webmanifest'
];

export async function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const clientIp = request.headers.get('cf-connecting-ip') || 
                  request.headers.get('x-forwarded-for') || 
                  request.headers.get('x-real-ip');

  const isBot = bots.some(bot => userAgent.toLowerCase().includes(bot));
  const isPrerender = userAgent.includes('Prerender') || PRERENDER_IPS.includes(clientIp || '');
  const pathname = new URL(request.url).pathname;
  const extension = pathname.slice(((pathname.lastIndexOf('.') - 1) >>> 0) + 1);

  // Skip if not a bot or if it's a static file
  if (!isBot || (extension.length && IGNORE_EXTENSIONS.includes(`.${extension}`))) {
    return NextResponse.next();
  }

  // Handle Prerender.io requests
  if (isPrerender) {
    console.log('Prerender request detected:', clientIp, userAgent);
    const prerenderUrl = `http://service.prerender.io/${request.url}`;
    const newHeaders = new Headers(request.headers);
    newHeaders.set('X-Prerender-Token', process.env.PRERENDER_TOKEN || '');

    try {
      const res = await fetch(prerenderUrl, {
        headers: newHeaders,
        redirect: 'manual',
      });

      const responseHeaders = new Headers(res.headers);
      responseHeaders.set('X-Redirected-From', request.url);

      // Stream the response
      const { readable, writable } = new TransformStream();
      res.body?.pipeTo(writable);

      return new NextResponse(readable, {
        status: res.status,
        statusText: res.statusText,
        headers: responseHeaders,
      });
    } catch (error) {
      console.error('Prerender error:', error);
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
}; 