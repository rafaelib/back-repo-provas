import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Exam from "./Exam";

@Entity("categories")
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exam, (exams) => exams.category)
  exams: Exam[];
}
