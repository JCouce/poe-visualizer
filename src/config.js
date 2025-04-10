import dotenv from 'dotenv';
dotenv.config();

export const config = {
  clientId: process.env.POE_CLIENT_ID,
  clientSecret: process.env.POE_CLIENT_SECRET,
  redirectUri: process.env.POE_REDIRECT_URI,
};
