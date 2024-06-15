import { AppDataSource } from '../data/data-source';
import { User } from '../entities/User';
import * as HttpResponse from '../utils/http-helper';
import { HttpResponse as IHttpResponse } from '../entities/http-response-entity';
import { UserRepository } from '../repositories/UserRepository';

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
