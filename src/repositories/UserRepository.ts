import { Repository } from 'typeorm';
import { AppDataSource } from '../data/data-source';
import { User } from '../entities/User';

export const UserRepository = AppDataSource.getRepository(User).extend({
    async insertUser(user: User): Promise<User> {
        return this.save(user);
    },

    async findAllUsers(): Promise<User[]> {
        return this.find();
    },

    async deleteUser(): Promise<void>{
        return this.delete(userId) 
    }


    // Outros métodos específicos podem ser adicionados aqui
}) as Repository<User> & {
    insertUser(user: User): Promise<User>;
    findAllUsers(): Promise<User[]>;   
    deleteUser(userId: number): Promise <void>
}
