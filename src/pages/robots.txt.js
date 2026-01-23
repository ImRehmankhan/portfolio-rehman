function RobotsTxt() {
  // getServerSideProps will handle the response
}

export async function getServerSideProps({ res }) {
  const baseUrl = 'https://www.softoria.tech';
  
  const robotsTxt = `# *
User-agent: *
Allow: /

# Disallow admin or api routes if any
Disallow: /api/

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay (optional, helps prevent server overload)
Crawl-delay: 0

# Allow Google AdSense bot
User-agent: Mediapartners-Google
Allow: /

# Allow Google image bot
User-agent: Googlebot-Image
Allow: /

# Allow all major search engine bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebot
Allow: /

User-agent: ia_archiver
Allow: /
`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}

export default RobotsTxt;
