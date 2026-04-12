const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const response = await fetch('https://makerworld.com/en/crowdfunding/256-orbio-the-rotating-table');
    const html = await response.text();
    const match = html.match(/Join <span>(\d+)<\/span> followers/);
    const count = match ? parseInt(match[1]) : 0;
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
