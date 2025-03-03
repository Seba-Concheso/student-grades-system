import { DataTypes } from "sequelize";
import sequelize from "../config/database";

// Modelo para la tabla intermedia StudentSubjects
const StudentSubjects = sequelize.define("StudentSubjects", {
  studentId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "students", // Referencia a la tabla 'students'
      key: "id"
    },
  },
  subjectId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "subjects", // Referencia a la tabla 'subjects'
      key: "id"
    },
  },
});

export default StudentSubjects;