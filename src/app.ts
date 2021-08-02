import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as examsController from "./controllers/examsController";
import * as teachersController from "./controllers/teachersController";
import * as categoriesController from "./controllers/categoriesController";
import * as subjectsController from "./controllers/subjectsController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/exams", examsController.getExams);
app.get("/teachers", teachersController.getTeachers);
app.get("/categories", categoriesController.getCategories);
app.get("/subjects", subjectsController.getSubjects);
app.get("/subjects/:id/teachers", subjectsController.getTeachersBySubjectId);

app.post("/exams", examsController.insertExam);

export async function init() {
  await connectDatabase();
}

export default app;
