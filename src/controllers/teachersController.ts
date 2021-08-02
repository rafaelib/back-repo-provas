import { Request, Response } from "express";
import * as teachersService from "../services/teachersService";

export async function getTeachers(req: Request, res: Response) {
  try {
    const result = await teachersService.getTeachers();
    if (result.length === 0) return res.sendStatus(404);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
