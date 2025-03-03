

import Student from "./student.model";
import Subject from "./subject.model";
import Grade from "./grade.model";
import Course from "./course.model";

// Relación N:M entre Estudiantes y Materias (con tabla intermedia)
Student.belongsToMany(Subject, { through: "StudentSubjects", foreignKey: "studentId" });
Subject.belongsToMany(Student, { through: "StudentSubjects", foreignKey: "subjectId" });

// Relación 1:N entre Estudiante y Calificación
Student.hasMany(Grade, { foreignKey: "studentId" }); // Especificamos el nombre de la clave foránea en minúsculas
Grade.belongsTo(Student, { foreignKey: "studentId" }); // Aseguramos que la clave foránea esté en minúsculas

// Relación 1:N entre Materia y Calificación
Subject.hasMany(Grade, { foreignKey: "subjectId" }); // Especificamos el nombre de la clave foránea en minúsculas
Grade.belongsTo(Subject, { foreignKey: "subjectId" }); // Aseguramos que la clave foránea esté en minúsculas


// Relación 1:N entre Curso y Materia
Course.hasMany(Subject, { foreignKey: "courseId" }); // Especificamos el nombre de la clave foránea en minúsculas
Subject.belongsTo(Course, { foreignKey: "courseId" }); // Aseguramos que la clave foránea esté en minúsculas


export { Student, Subject, Grade, Course };
