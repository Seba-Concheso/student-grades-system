




import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Course from "./course.model";

class Subject extends Model {}

Subject.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    courseId: { // ✅ Agregar la clave foránea aquí
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "courses", // Hace referencia a la tabla "courses"
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL", // O "CASCADE" si quieres eliminar en cascada
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Subject",
    tableName: "subjects",
    timestamps: true,
  }
);

// // ✅ Definir la relación
Course.hasMany(Subject, { foreignKey: "courseId",  as: "courses" });
Subject.belongsTo(Course, { foreignKey: "courseId",  as: "courses" });

export default Subject;