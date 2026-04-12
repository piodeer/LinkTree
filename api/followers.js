export default async function handler(req, res) {
  try {
    const url = "https://makerworld.com/en/crowdfunding/256-orbio-the-rotating-table";

    const response = await fetch(url);
    const html = await response.text();

    // Suche nach "followerCount":32 im HTML
    const match = html.match(/"followerCount":\s*(\d+)/);

    if (!match) {
      return res.status(500).json({ error: "Follower count not found" });
    }

    const followers = parseInt(match[1], 10);

    res.status(200).json({
      followers: followers
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
