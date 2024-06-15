import { Router, Request, Response } from "express";
import * as UserController from "./controllers/UserController";

const router = Router();

router.get('/', (request: Request, response: Response) => {
    return response.json({ mensagem: "Bem vindo!" });
});

router.get('/usuarios', UserController.getUsers)
router.post('/usuarios', UserController.createUser);

//atualizar a data do Plantão
//router.patch('/usuarios/date', updateController.handle)

export default router;
