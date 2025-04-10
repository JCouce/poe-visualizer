import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Importar rutas
import authRoutes from './oauth/auth.js';
import callbackRoutes from './oauth/callback.js';
import successRoute from './oauth/success.js';

dotenv.config();

// Necesario para poder usar __dirname con ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON y formularios (si necesitas más adelante)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (tu HTML de prueba)
app.use(express.static(path.join(__dirname, '../public')));

// Rutas OAuth
app.use('/oauth', authRoutes);
app.use('/oauth', callbackRoutes);
app.use('/oauth', successRoute);

// Ruta base
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// 404 fallback
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
