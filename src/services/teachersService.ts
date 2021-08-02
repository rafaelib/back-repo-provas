import { getRepository } from "typeorm";
import Teacher from "../entities/Teacher";

export async function getTeachers(): Promise<Teacher[]> {
  const teachers = await getRepository(Teacher).find();
  return teachers;
}
