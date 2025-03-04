

import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Course extends Model {}


Course.init(
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        modelName: "Course",
        tableName: "courses",
        timestamps: true,
        underscored: true
    }
)

export default Course