


import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Student from "./student.model";
import Subject from "./subject.model";

class Grade extends Model {}


Grade.init( //calificación
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      value: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      studentId: {
        type: DataTypes.UUID,
        references: {
          model: "students",
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      subjectId: {
        type: DataTypes.UUID,
        references: {
          model: "subjects",
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
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
      modelName: "Grade",
      tableName: "grades",
      timestamps: true,
      underscored: true
    }
  );

// // Relación 1:N entre estudiantes y calificaciones
Grade.belongsTo(Student, { foreignKey: "student_id", as: "students" });
Grade.belongsTo(Subject, { foreignKey: "subject_id", as: "subjects" });

export default Grade