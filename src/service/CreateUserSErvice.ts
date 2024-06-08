import { AppDataSource } from '../data/data-source';
import { User } from '../entity/User';

interface IUsuario {
    nome: string;
    email: string;
}

class CreateUserService {
    async execute({ nome, email }: IUsuario): Promise<User> {
        const userRepository = AppDataSource.getRepository(User);

        // Verifica se o usuário já existe
        const userExists = await userRepository.findOne({ where: { email } });
        if (userExists) {
            throw new Error('User already exists');
        }

        // Cria e salva o novo usuário
        const user = userRepository.create({ nome, email });
        await userRepository.save(user);

        return user;
    }
}

export { CreateUserService };
