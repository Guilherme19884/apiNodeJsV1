import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./data/data-source";
import router from "./router";

// Inicializa o AppDataSource
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");

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
