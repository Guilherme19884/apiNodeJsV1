import { AppDataSource } from '../data/data-source';
import { User } from '../entity/User';

interface IUser {
    name: string;
    shiftDate: Date;
    role: string;
}

class CreateUserService {
    async execute({ name, shiftDate, role }: IUser): Promise<User> {
        const userRepository = AppDataSource.getRepository(User);

        // Check if the user already exists by name
        const userExists = await userRepository.findOne({ where: { name } });
        if (userExists) {
            throw new Error('User already exists');
        }

        // Create and save the new user
        const user = userRepository.create({ name, shiftDate, role });
        await userRepository.save(user);

        return user;
    }
}

export { CreateUserService };
