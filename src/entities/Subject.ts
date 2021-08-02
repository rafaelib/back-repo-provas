import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from "typeorm";
import Exam from "./Exam";
import Teacher from "./Teacher";
import Semester from "./Semester";

@Entity("subjects")
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exam, (exams) => exams.subject)
  exams: Exam[];

  @ManyToMany(() => Teacher, (teacher) => teacher.subjects)
  @JoinTable()
  teachers: Teacher[];

  @ManyToOne(() => Semester, (semester) => semester.subjects)
  semester: Semester;
}
