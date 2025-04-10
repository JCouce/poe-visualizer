import express from 'express';
import { config } from '../config.js';

const router = express.Router();

router.get('/callback', async (req, res) => {
  const code = req.query.code;

  if (!code) return res.status(400).send('Missing code');

  const tokenUrl = 'https://www.pathofexile.com/oauth/token';

  const params = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    grant_type: 'authorization_code',
    code,
    redirect_uri: config.redirectUri,
  });

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Token error:', data);
      return res.status(500).send('Failed to get access token');
    }

    const access_token = data.access_token;

    // Prueba de redirección con token
    res.redirect(`/oauth/success?access_token=${access_token}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('OAuth request failed');
  }
});

export default router;
