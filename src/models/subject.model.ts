




import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Course from "./course.model";

class Subject extends Model {}

Subject.init( //Asignatura
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
    course_id: { // ✅ Agregar la clave foránea aquí
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
    underscored:true
  }
);

// // ✅ Definir la relación
Course.hasMany(Subject, { foreignKey: "course_id",  as: "courses" });
Subject.belongsTo(Course, { foreignKey: "course_id",  as: "courses" });

export default Subject;