

import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";


class Student extends Model {}

Student.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      courseId: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
          model: "courses", // en referencia a la tabla courses
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL", 
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
      modelName: "Student",
      tableName: "students",
      timestamps: true,
      underscored: true
    }
  );

  export default Student