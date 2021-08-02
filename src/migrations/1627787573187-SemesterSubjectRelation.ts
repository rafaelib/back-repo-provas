import {MigrationInterface, QueryRunner} from "typeorm";

export class SemesterSubjectRelation1627787573187 implements MigrationInterface {
    name = 'SemesterSubjectRelation1627787573187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" ADD "semesterId" integer`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD CONSTRAINT "FK_b40f2ecc6d3f61e93a945091931" FOREIGN KEY ("semesterId") REFERENCES "semesters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" DROP CONSTRAINT "FK_b40f2ecc6d3f61e93a945091931"`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "semesterId"`);
    }

}
