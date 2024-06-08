import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserSErvice";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createUserService = new CreateUserService();
        
        const { nome, shiftDate } = request.body;

        if (!nome || !shiftDate) {
            return response.status(400).json({ message: "Preencha todos os campos" });
        }

        try {
            const user = await createUserService.execute({ nome, shiftDate });
            return response.status(201).json(user);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export { CreateUserController };

//Atualizar a data do Plantão

//Excluir usuário
