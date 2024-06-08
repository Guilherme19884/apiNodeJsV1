import { DataSource } from "typeorm";
import { User } from "../entity/User"; // Ajuste o caminho conforme necessário

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./database.sqlite", // Caminho para o arquivo do banco de dados SQLite
    synchronize: true, // Pode ser true para desenvolvimento, false para produção
    logging: true,
    entities: [User],
    migrations: ["src/migration/**/*.ts"], // Garanta que o caminho das migrações está correto
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });
