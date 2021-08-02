import { getRepository } from "typeorm";
import Exam from "../entities/Exam";

export async function getExams(): Promise<Exam[]> {
  const exams = await getRepository(Exam).find();
  return exams;
}

export async function insertNewExam(newTest: Exam): Promise<boolean> {
  await getRepository(Exam).insert(newTest);
  return true;
}
