import { CorsOptions } from 'cors';

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    const whitelist = [process.env.FRONTEND_URL];

    if (process.argv.includes('--api')) {
      whitelist.push(undefined); // Permite solicitudes sin encabezado `Origin`
    }

    console.log(`Origin: ${origin}`); // Agrega esta línea para depurar
    console.log(`Whitelist: ${whitelist}`); // Agrega esta línea para depurar

    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Error de CORS..!'));
    }
  },
};
