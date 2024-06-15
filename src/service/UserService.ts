import { AppDataSource } from '../data/data-source';
import { User } from '../entities/User';
import * as HttpResponse from '../utils/http-helper';
import { HttpResponse as IHttpResponse } from '../entities/http-response-entity';
import { UserRepository } from '../repositories/UserRepository';


export const createUserService = async (user: User)=> {
    let response = null

    if(Object.keys(user).length !== 0){
    await UserRepository.insertUser(user)
    response = await HttpResponse.created()

    }else{
        console.log('bad request')
        response = await HttpResponse.badRequest()
    }
    return response
}

export const getUsersService = async (): Promise<IHttpResponse> => {
    const userRepository = AppDataSource.getRepository(User);
    const data = await userRepository.find();

    if (data.length > 0) {
        return HttpResponse.ok(data);
    } else {
        return HttpResponse.noContent();
    }
}


