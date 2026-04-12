export default async function handler(req, res) {
  try {
    const response = await fetch('https://makerworld.com/en/crowdfunding/256-orbio-the-rotating-table', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const html = await response.text();
    const match = html.match(/Join (\d+) followers already waiting for its launch/);
    const followerCount = match ? parseInt(match[1]) : 0;
    // Debug: Gib match zurück
    res.status(200).json({ followerCount, match: match ? match[0] : null });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
