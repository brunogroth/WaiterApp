import path from 'node:path';
import express from 'express';
var cors = require('cors');
import mongoose from 'mongoose';
import { router } from './router';
//Security dotenv (.env) file
import "dotenv/config";

mongoose.connect(`${process.env.MONGODB_URI}`,)
  .then(() => {
    const app = express();
    const port = 3001;

    //Static Path para acessar as imagens do "uploads" publicamente pela rota /uploads/filename
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(cors());
    app.use(express.json()); // Usado para transformar o string recebido via requisições Post para um objeto para ser usado nas camadas de Caso de Uso
    app.use(router); //Mapeamento de rotas

    app.listen(port,() =>{
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro Conectar Mongo'));

