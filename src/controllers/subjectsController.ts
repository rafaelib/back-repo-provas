import { Request, Response } from "express";
import * as subjectsService from "../services/subjectsService";

export async function getSubjects(req: Request, res: Response) {
  try {
    const result = await subjectsService.getSubjects();
    if (result.length === 0) return res.sendStatus(404);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getTeachersBySubjectId(req: Request, res: Response) {
  const id = Number(req.params.id);
  try {
    const result = await subjectsService.getTeachersBySubjectId(id);
    if (result.teachers.length === 0) return res.sendStatus(404);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
