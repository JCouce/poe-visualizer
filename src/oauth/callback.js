import express from 'express';
import axios from 'axios';
const router = express.Router();

router.get('/callback', async (req, res) => {
  const code = req.query.code;

  try {
    const response = await axios.post('https://www.pathofexile.com/oauth/token', null, {
      params: {
        client_id: process.env.POE_CLIENT_ID,
        client_secret: process.env.POE_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.POE_REDIRECT_URI,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token } = response.data;

    // Puedes guardarlo en sesión o hacer la llamada directamente
    res.redirect(`/characters?access_token=${access_token}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('OAuth error');
  }
});

export default router;
