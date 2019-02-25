import {MigrationInterface, QueryRunner} from "typeorm";

export class myMigration1551125929665 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "resto" ADD "ownerId" integer`);
        await queryRunner.query(`ALTER TABLE "resto" ADD CONSTRAINT "FK_ae3105193ab3855275baf6e84bc" FOREIGN KEY ("ownerId") REFERENCES "user"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "resto" DROP CONSTRAINT "FK_ae3105193ab3855275baf6e84bc"`);
        await queryRunner.query(`ALTER TABLE "resto" DROP COLUMN "ownerId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
