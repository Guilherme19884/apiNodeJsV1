import { AppDataSource } from '../data/data-source';
import { User } from '../entities/User';
import * as HttpResponse from '../utils/http-helper';
import { HttpResponse as IHttpResponse } from '../entities/http-response-entity';
import { UserRepository } from '../repositories/UserRepository';
import { TreeRepositoryUtils } from 'typeorm';

export const createUserService = async (user: Partial<User>): Promise<IHttpResponse> => {
    let response = null;

    if (Object.keys(user).length !== 0) {
        const newUser = new User();
        newUser.id = user.id;
        newUser.name = user.name;
        newUser.role = user.role;
        newUser.shiftDate = user.shiftDate ? new Date(user.shiftDate) : null;

        await UserRepository.insertUser(newUser);
        response = await HttpResponse.created();
    } else {
        console.log('bad request');
        response = await HttpResponse.badRequest();
    }
    return response;
};

export const getUsersService = async (): Promise<IHttpResponse> => {
    const data = await UserRepository.findAllUsers();

    if (data.length > 0) {
        return HttpResponse.ok(data);
    } else {
        return HttpResponse.noContent();
    }
};

export const getOneUserService = async (id: number): Promise<any> => {
    try {
        const user = await UserRepository.findOneById(id);

        if (user) {
            return HttpResponse.ok(user); // Retorna o usuário encontrado
        } else {
            return HttpResponse.noContent(); // Retorna 204 No Content se não encontrar o usuário
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        return HttpResponse.serverError(); // Retorna erro 500 em caso de falha
    }
}

export const deleteUserService = async (id: number): Promise<any> => {
    try {
        const userDeleted = await UserRepository.delete(id) 

        if (userDeleted){
            return HttpResponse.ok({message: "Deleted!"})
        }else{
            return HttpResponse.badRequest()
        }
    } catch (error) {
        console.error("Error fetiching user:", error)
        return HttpResponse.serverError()
    }
}

export const updateUserService = async (id: number, user: Partial<User>): Promise <any> => {
    const data = await UserRepository.findUserAndModify(id, user)

    if(!data) {
        return HttpResponse.badRequest()
    }

    const response = await HttpResponse.ok(data)
    return { statusCode: 200, body: response }
}