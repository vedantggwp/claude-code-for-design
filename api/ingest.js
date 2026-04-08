export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { url, code } = req.body;

  if (!code || code !== process.env.INGEST_SECRET) {
    return res.status(401).json({ error: 'Invalid access code' });
  }

  try {
    new URL(url);
  } catch {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  try {
    const ghResp = await fetch(
      'https://api.github.com/repos/vedantggwp/claude-code-for-design/actions/workflows/wiki-ingest.yml/dispatches',
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${process.env.GITHUB_PAT}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ref: 'main',
          inputs: { url }
        })
      }
    );

    if (ghResp.status === 204) {
      return res.status(200).json({
        ok: true,
        message: 'Ingest triggered. A PR will be created when processing completes.'
      });
    }

    const errText = await ghResp.text();
    return res.status(502).json({ error: 'GitHub dispatch failed', status: ghResp.status, details: errText });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to trigger ingest', details: err.message });
  }
}
