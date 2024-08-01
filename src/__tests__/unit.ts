import request from 'supertest'
import app from '../router' // Importe o aplicativo Express configurado com seus endpoints

describe('Middleware de Autenticação', () => {
  it('Deve retornar status 401 ao acessar um endpoint protegido sem token', async () => {
    const response = await request(app).get('/usuarios');
    expect(response.status).toBe(401);
  })

  // it('Deve retornar status 200 ao acessar um endpoint protegido com token válido', async () => {
  //   // Implemente a lógica para gerar um token JWT válido para seus testes
  //   const token = 'seu-token-jwt';

  //   // Faça a requisição HTTP incluindo o token no cabeçalho Authorization
  //   const response = await request(app)
  //     .get('/usuarios')
  //     .set('Authorization', `Bearer ${token}`);

  //   // Verifique se a resposta foi bem-sucedida (status 200)
  //   expect(response.status).toBe(200);

  //   // Verifique se a resposta contém as informações do usuário esperadas
  //   expect(response.body).toHaveProperty('user');
  //   // Adicione mais asserções conforme necessário para verificar as informações retornadas
  // });
});
