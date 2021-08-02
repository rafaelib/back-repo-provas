import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSeed1627766374178 implements MigrationInterface {
  name = "CreateSeed1627766374178";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "teachers" DROP COLUMN "quantity"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "teachers" ADD "quantity" integer NOT NULL`
    );
  }
}
