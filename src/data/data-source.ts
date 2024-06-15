import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { TableUsers1718486463874 } from "../../1718486463874-TableUsers";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "plantao",
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: true,
    migrations: [TableUsers1718486463874]
})

// Initialize the database connection
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((error) => console.log("Error during Data Source initialization:", error))
