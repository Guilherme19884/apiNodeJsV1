import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./data/data-source";
import router from "./router";
import mysql from "mysql2"

// Inicializa o AppDataSource
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");

        const conection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "123456",
            database: "plantao"

        })
        const server = express();

        // Middleware para parsear JSON
        server.use(express.json());

        // Adiciona o router
        server.use(router);

        // Inicia o servidor
        server.listen(3000, () => {
            console.log('Servidor funcionando na porta 3000 http://localhost:3000');
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });
