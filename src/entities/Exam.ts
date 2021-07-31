import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Teacher from "./Teacher";
import Category from "./Category";
import Subject from "./Subject";

@Entity("exams")
export default class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  link: string;

  @Column()
  TeacherId: number;

  @Column()
  categoryId: number;

  @Column()
  SubjectId: number;

  @ManyToOne(() => Subject, (subject) => subject.exams)
  subject: Subject;

  @ManyToOne(() => Category, (category) => category.exams)
  category: Category;

  @ManyToOne(() => Teacher, (teacher) => teacher.exams)
  teacher: Teacher;
}
