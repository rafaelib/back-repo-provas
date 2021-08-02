import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSemesterTable1627710624370 implements MigrationInterface {
  name = "CreateSemesterTable1627710624370";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "semesters" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_25c393e2e76b3e32e87a79b1dc2" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "semesters"`);
  }
}
