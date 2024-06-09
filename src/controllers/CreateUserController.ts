import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserSErvice";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createUserService = new CreateUserService();
        
        const { name, shiftDate, role } = request.body;

        if (!name || !shiftDate) {
            return response.status(400).json({ message: "Preencha todos os campos" });
        }

        try {

            const shiftDateObj = new Date(shiftDate);

            const user = await createUserService.execute({ name, shiftDate: shiftDateObj, role});
            return response.status(201).json(user);
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export { CreateUserController };

//Listar usuários

export const getUsers = async (request: Request, response: Response) =>{
    const HttpResponse = await getUsersService()
    response.status(HttpResponse.status).json(HttpResponse.body)
}

//Atualizar a data do Plantão

//Excluir usuário
