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

    async deleteUser(userId: number): Promise<void>{
        return this.delete(userId) 
    },

    async findUserAndModify(userId: number, user: Partial<User>): Promise<User> {
        // Adicionando condição de seleção ao findOne
        const userToUpdate = await this.findOne({ where: { id: userId } })
        if (!userToUpdate) throw new Error("User not found")

        Object.assign(userToUpdate, user)
        return this.save(userToUpdate)
    }

    // Outros métodos específicos podem ser adicionados aqui
}) as Repository<User> & {
    insertUser(user: User): Promise<User>;
    findAllUsers(): Promise<User[]>;   
    deleteUser(userId: number): Promise <void>
    findUserAndModify(userId: number, user: Partial<User>): Promise<User>
}
