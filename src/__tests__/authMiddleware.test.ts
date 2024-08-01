import request from 'supertest';
import express, { Application } from 'express';
import router from '../router';
import jwt from 'jsonwebtoken';
import jwtConfig from '../utils/jwtConfig';
import { UserRepository } from '@/repositories/UserRepository';
import { User } from '../entities/User'; // Certifique-se de importar o tipo User correto

const app: Application = express();
app.use(express.json());
app.use('/', router);

// Mock do UserRepository
jest.mock('@/repositories/UserRepository');
const mockedUserRepository = UserRepository as jest.Mocked<typeof UserRepository>;

describe('Middleware de Autenticação', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Limpa os mocks após cada teste
  });

  it('Deve retornar status 401 ao acessar um endpoint protegido sem token', async () => {
    const response = await request(app).get('/usuarios');
    expect(response.status).toBe(401);
  });

  it('Deve retornar status 200 ao acessar um endpoint protegido com token válido', async () => {
    // Mock de um usuário válido e token
    const mockUser: User = {
      id: 1,
      name: 'Teste',
      role: 'supervisor',
      shiftDate: new Date('2024-06-25'),
      password: '',
      hashPassword: function (): Promise<void> {
        throw new Error('Function not implemented.');
      }
    };

    const token = jwt.sign(
      { id: mockUser.id, name: mockUser.name, role: mockUser.role },
      jwtConfig.secret,
      { expiresIn: jwtConfig.expiresIn }
    );

    // Simula o retorno do UserRepository para o método findOneBy
    mockedUserRepository.findOneBy.mockResolvedValueOnce(mockUser);

    // Requisição com token válido
    const response = await request(app)
      .get('/usuarios')
      .set('Authorization', `Bearer ${token}`);

    // Verifica se o status da resposta é 200
    expect(response.status).toBe(200);
    
    // Verifica se a resposta contém a propriedade 'users' com o usuário mockado
    expect(response.body).toHaveProperty('users', [mockUser]);
  });
});
