import express from 'express';
const router = express.Router();

router.get('/login', (req, res) => {
  const redirectUri = encodeURIComponent(process.env.POE_REDIRECT_URI);
  const clientId = process.env.POE_CLIENT_ID;
  const scope = encodeURIComponent('account:characters');

  const authUrl = `https://www.pathofexile.com/oauth/authorize?client_id=${clientId}&response_type=code&scope=${scope}&redirect_uri=${redirectUri}`;

  res.redirect(authUrl);
});

export default router;
