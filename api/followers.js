export default async function handler(req, res) {
  try {
    const response = await fetch('https://makerworld.com/_next/data/LTOXkChcsEc-XKMVYz1vs/en/crowdfunding/256-orbio-the-rotating-table.json', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const data = await response.json();
    const followerCount = data.pageProps.detail.followerCount;
    res.status(200).json({ followerCount });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
