

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL no está definida en el archivo .env");
  }
  
  const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Importante para Railway
      },
    },
    logging: false, // Desactivar logs de SQL, actívalo si lo necesitas
    // logging: console.log, // Activa el logging para ver las consultas SQL
  });

// Sincroniza la base de datos
async function syncDatabase() {
  try {
    
    // await sequelize.sync({ alter: true }); // Forzamos la recreación de las tablas
    await sequelize.sync({ force: false, alter: false }); // No modificamos las tablas
    console.log("Database synced!");
  } catch (error) {
    console.error("Error syncing database:", error);
  }
}

// Llamamos a la función de sincronización
syncDatabase();

export default sequelize;



// Esto es para no usar sequelize y directamente SQL
// import  { Pool} from "pg"
// import dotenv from "dotenv"
// import { error } from "console"

// dotenv.config()

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//         rejectUnauthorized: false  //Necesario para conexiones seguras en railway
//     }
// })


// pool.connect()
// .then(()=> console.log("conected to PostgreSQL on Railway"))
// .catch(()=> console.error("database conecction error: ", error))


// export default pool
