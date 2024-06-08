import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();
const createUserController = new CreateUserController();

router.get('/', (request: Request, response: Response) => {
    return response.json({ mensagem: "Bem vindo!" });
});

router.post('/usuarios', createUserController.handle);

//atualizar a data do Plantão
router.patch('/usuarios/date', updateController.handle)

export default router;
