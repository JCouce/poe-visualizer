import express from 'express';
const router = express.Router();

router.get('/success', async (req, res) => {
  const accessToken = req.query.access_token;

  if (!accessToken) {
    return res.status(400).send('Missing access_token');
  }

  try {
    const response = await fetch('https://api.pathofexile.com/character', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('PoE API error:', data);
      return res.status(500).send('Failed to fetch characters');
    }

    // Muestra los datos como JSON por ahora
    res.json(data);
  } catch (err) {
    console.error('Error fetching characters:', err);
    res.status(500).send('Server error');
  }
});

export default router;
