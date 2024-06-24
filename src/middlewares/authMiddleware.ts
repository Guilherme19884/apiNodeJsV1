import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import jwtConfig from '../utils/jwtConfig'

export const authMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({ message: 'No token provided' })
  }

  const parts = authHeader.split(' ')

  if (!(parts.length === 2)) {
    return response.status(401).json({ message: 'Token error' })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return response.status(401).json({ message: 'Token malformatted' })
  }

  jwt.verify(token, jwtConfig.secret, (err, decoded) => {
    if (err) {
      console.error('Error verifying token:', err)
      return response.status(401).json({ message: 'Invalid token' })
    }

    // Adiciona o usuário decodificado ao objeto request
    request.user = decoded as any // Define o tipo de 'decoded' como 'any'

    next()
  })
}
