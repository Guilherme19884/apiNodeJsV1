import { Request, Response } from 'express';
import { createUserService, deleteUserService, getOneUserService, getUsersService } from '../service/UserService';
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
    return response.status(httpResponse.statusCode).json(httpResponse.body)
}

// Listar Único Usuário por Id
export const getOneUser = async (request: Request, response: Response): Promise<Response> => {
    const userId = Number(request.params.id) // Assume que o ID está sendo passado como parâmetro na URL
    const httpResponse = await getOneUserService(userId)

    return response.status(httpResponse.statusCode).json(httpResponse.body)
}

// Deletar usuário pelo id
export const deleteUser = async(request: Request, response: Response): Promise<Response> =>{
    const userId = Number(request.params.id)
    const httpResponse = await deleteUserService(userId)

    return response.json({Usuario :"Deletado com sucesso"})
    console.log('Usuário deletado com sucesso!')
}