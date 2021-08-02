import { Request, Response } from "express";
import * as examsService from "../services/examsService";

export async function getExams(req: Request, res: Response) {
  try {
    const result = await examsService.getExams();
    if (result.length === 0) return res.sendStatus(404);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function insertExam(req: Request, res: Response) {
  try {
    const { name, link, categoryId, teacherId, subjectId } = req.body;
    if (!name || !link || !categoryId || !teacherId || !subjectId) {
      return res.sendStatus(400);
    }
    console.log(req.body);
    await examsService.insertNewExam(req.body);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
