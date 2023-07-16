import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routes/userRoutes';
import productRouter from './routes/productRouter';

const app = express();
app.use(express.json());

const dbUrl = 'mongodb://127.0.0.1:27017/Fhira';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions)
  .then(() => {
    console.log('Terhubung ke database MongoDB');
    const port = 3000; // Ganti dengan port yang ingin Anda gunakan
    app.listen(port, () => {
      console.log(`Server berjalan di http://localhost:3000`);
    });
  })
  .catch((error) => {
    console.log('Kesalahan saat terhubung ke database:', error);
  });

app.use('/users', userRouter);
app.use('/products', productRouter);
