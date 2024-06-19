import { Router, Request, Response } from "express";
import * as UserController from "./controllers/UserController";

const router = Router();

router.get('/', (request: Request, response: Response) => {
    return response.json({ mensagem: "Bem vindo!" });
});

router.get('/usuarios', UserController.getUsers)
router.post('/usuarios', UserController.createUser)
router.get('/usuarios/:id', UserController.getOneUser)
router.delete('/usuarios/:id', UserController.deleteUser)

//atualizar a data do Plantão
//router.patch('/usuarios/:id', updateController.updateShift)

export default router;
