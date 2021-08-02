import { getRepository } from "typeorm";
import Subject from "../entities/Subject";

export async function getSubjects(): Promise<Subject[]> {
  const subjects = await getRepository(Subject).find();
  return subjects;
}

export async function getTeachersBySubjectId(id: Number): Promise<Subject> {
  const subject = await getRepository(Subject).findOne({
    where: { id },
    relations: ["teachers"],
  });
  return subject;
}
