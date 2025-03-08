// filepath: /home/fmetal/Documentos/Proyectos/Flashtag/backend/app.js
import cors from 'cors';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import testConnection from './db/config/testConnection.js';
import couponRoutes from './src/routers/couponRoutes.js';
import feedbackRoutes from './src/routers/feedbackRoutes.js';
import linkListRoutes from './src/routers/linkListRoutes.js';
import loyaltyCardRoutes from './src/routers/loyaltyCardRoutes.js';
import productRoutes from './src/routers/productRoutes.js';
import qrAnalyticRoutes from './src/routers/qrAnalyticRoutes.js';
import qrCodeRoutes from './src/routers/qrCodeRoutes.js';
import qrTagRoutes from './src/routers/qrTagRoutes.js';
import qrTypeRoutes from './src/routers/qrTypeRoutes.js';
import reviewRoutes from './src/routers/reviewRoutes.js';
import roleRoutes from './src/routers/roleRoutes.js';
import rouletteRoutes from './src/routers/rouletteRoutes.js';
import rouletteConfigRoutes from './src/routers/rouletteConfigRoutes.js';
import socialNetworkRoutes from './src/routers/socialNetworkRoutes.js';
import subscriptionRoutes from './src/routers/subscriptionRoutes.js';
import templateRoutes from './src/routers/templateRoutes.js';
import userRoutes from './src/routers/userRoutes.js';
import userSubscriptionRoutes from './src/routers/userSubscriptionRoutes.js';
import wifiRoutes from './src/routers/wifiRoutes.js';
import redirectResourceRoutes from './src/routers/redirectResourceRoutes.js';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('src'));

testConnection();
app.listen(8006, '0.0.0.0', console.log('Server runing successfully...'));

app.use('/coupons', couponRoutes);
app.use('/feedbacks', feedbackRoutes);
app.use('/link_lists', linkListRoutes);
app.use('/loyalty_cards', loyaltyCardRoutes);
app.use('/products', productRoutes);
app.use('/qr_analytics', qrAnalyticRoutes);
app.use('/qr_codes', qrCodeRoutes);
app.use('/qr_tags', qrTagRoutes);
app.use('/qr_types', qrTypeRoutes);
app.use('/reviews', reviewRoutes);
app.use('/roles', roleRoutes);
app.use('/roulettes', rouletteRoutes);
app.use('/roulette_configs', rouletteConfigRoutes);
app.use('/social_networks', socialNetworkRoutes);
app.use('/subscriptions', subscriptionRoutes);
app.use('/templates', templateRoutes);
app.use('/users', userRoutes);
app.use('/user_subscriptions', userSubscriptionRoutes);
app.use('/wifis', wifiRoutes);

// Servir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads', express.static(join(__dirname, 'uploads')));

// Ruta para obtener la lista de archivos en la carpeta 'uploads'
app.get('/uploads', (req, res) => {
    const uploadsDir = join(__dirname, 'src', 'uploads');
  
    fs.readdir(uploadsDir, (err, files) => {
      if (err) {
        console.error("Error al leer directorio:", err);
        return res.status(500).json({ error: 'No se pudieron listar los archivos' });
      }
      res.json(files);
    });
  });

app.use('/redirect_resources', redirectResourceRoutes);