import { Router, Request, Response } from "express"
import * as UserController from "./controllers/UserController"
import { authMiddleware } from "./middlewares/authMiddleware"

const router = Router();

router.get('/', (request: Request, response: Response) => {
    return response.json({ mensagem: "Bem vindo!" });
});

router.get('/usuarios', authMiddleware, UserController.getUsers)
router.post('/usuarios', authMiddleware,  UserController.createUser)
router.get('/usuarios/:id', authMiddleware, UserController.getOneUser)
router.delete('/usuarios/:id', authMiddleware, UserController.deleteUser)
router.put('/usuarios/:id', authMiddleware, UserController.updateUser)


export default router;
