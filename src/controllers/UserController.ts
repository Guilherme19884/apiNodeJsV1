import { Request, Response } from 'express';
import { createUserService, getUsersService } from '../service/UserService';
import * as HttpResponse from '../utils/http-helper';


//Criar usuários
export const createUser = async (request: Request, response: Response) => {
    const bodyValue = request.body
    const httpResponse = await createUserService(bodyValue)

    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }else{
        const noContentResponse = HttpResponse.noContent();
        response.status((await noContentResponse).statusCode).json((await noContentResponse).body)
    }
    console.log(bodyValue)
}

// Listar usuários
export const getUsers = async (request: Request, response: Response): Promise<Response> => {
    const httpResponse = await getUsersService();
    return response.status(httpResponse.statusCode).json(httpResponse.body);
}



