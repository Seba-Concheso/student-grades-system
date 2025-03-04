

import Student from "./student.model";
import Subject from "./subject.model";
import Grade from "./grade.model";
import Course from "./course.model";

// Relación N:M entre Estudiantes y Materias (con tabla intermedia)
Student.belongsToMany(Subject, { through: "student_subjects", foreignKey: "student_id" });
Subject.belongsToMany(Student, { through: "student_subjects", foreignKey: "subject_id" });

// Relación 1:N entre Estudiante y Calificación
Student.hasMany(Grade, { foreignKey: "student_id" }); // Especificamos el nombre de la clave foránea en minúsculas
Grade.belongsTo(Student, { foreignKey: "student_id" }); // Aseguramos que la clave foránea esté en minúsculas

// Relación 1:N entre Materia y Calificación
Subject.hasMany(Grade, { foreignKey: "subject_id" }); // Especificamos el nombre de la clave foránea en minúsculas
Grade.belongsTo(Subject, { foreignKey: "subject_id" }); // Aseguramos que la clave foránea esté en minúsculas


// Relación 1:N entre Curso y Materia
Course.hasMany(Subject, { foreignKey: "course_id" }); // Especificamos el nombre de la clave foránea en minúsculas
Subject.belongsTo(Course, { foreignKey: "course_id" }); // Aseguramos que la clave foránea esté en minúsculas

Student.belongsTo(Course, { foreignKey: "course_id" });
Course.hasMany(Student, { foreignKey: "course_id" });

export { Student, Subject, Grade, Course };
