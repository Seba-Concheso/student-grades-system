import { DataTypes } from "sequelize";
import sequelize from "../config/database";

// Modelo para la tabla intermedia StudentSubjects
const StudentSubjects = sequelize.define(
  "StudentSubjects",
  {
    student_id: {  // ✅ Cambio a snake_case porque usás underscored: true
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "students",
        key: "id"
      },
    },
    subject_id: {  // ✅ Cambio a snake_case
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "subjects",
        key: "id"
      },
    },
  },
  {
    tableName: "student_subjects", // ✅ Nombre en plural y en snake_case
    timestamps: true,
    underscored: true
  }
);

export default StudentSubjects;
