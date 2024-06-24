import { User } from '../entities/User'

declare module 'express-serve-static-core' {
  interface Request {
    user?: User; // Adiciona a propriedade 'user' ao objeto Request com o tipo User
  }
}