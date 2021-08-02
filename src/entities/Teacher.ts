import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from "typeorm";
import Exam from "./Exam";
import Subject from "./Subject";

@Entity("teachers")
export default class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Subject, (subjects) => subjects.teachers)
  subjects: Teacher[];

  @OneToMany(() => Exam, (exams) => exams.teacher)
  exams: Exam[];
}
