import {MigrationInterface, QueryRunner} from "typeorm";

export class createTable1627755742491 implements MigrationInterface {
    name = 'createTable1627755742491'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "TeacherId"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "SubjectId"`);
        await queryRunner.query(`ALTER TABLE "teachers" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3"`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "categoryId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3"`);
        await queryRunner.query(`ALTER TABLE "exams" ALTER COLUMN "categoryId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "teachers" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "SubjectId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "TeacherId" integer NOT NULL`);
    }

}
