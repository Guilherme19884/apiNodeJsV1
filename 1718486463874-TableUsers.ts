import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class TableUsers1718486463874 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "User",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: false
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "role",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "shiftDate",
                        type: "timestamp",
                        isNullable: true
                    }
                ]
            }),
            true // Indica que a tabela deve ser criada se não existir
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}
