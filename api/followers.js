export default async function handler(req, res) {
  try {
    const response = await fetch('https://makerworld.com/en/crowdfunding/256-orbio-the-rotating-table', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const html = await response.text();
    // Debug: Gib HTML-Snippet zurück
    res.status(200).json({ htmlSnippet: html.substring(0, 2000) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
