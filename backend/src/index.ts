import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/database";
import studentRoutes from "./routes/students.routes";
import subjectsRoutes from "./routes/subjects.routes";
import gradeRoutes from "./routes/grades.routes";
import coursesRouter from "./routes/courses.routes";
import userRoutes from "./routes/user.routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes); // 👈 esta línea registra la ruta /users/login

app.use("/students", studentRoutes);
app.use("/grades", gradeRoutes);
app.use("/subjects", subjectsRoutes);
app.use("/courses", coursesRouter);

const PORT = process.env.PORT || 5000;

app.get("/ping", async (req, res) => {
  try {
    const result = await sequelize.query("SELECT NOW()");
    res.json({ message: "Database connected", time: result[0] });
  } catch (error) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

// Para usar directamente SQL
// app.get("/ping", async (req, res) => {
//     try {
//       const result = await pool.query("SELECT NOW()");
//       res.json({ message: "Database connected", time: result.rows[0] });
//     } catch (error) {
//       res.status(500).json({ error: "Database connection failed" });
//     }
//   });

//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
