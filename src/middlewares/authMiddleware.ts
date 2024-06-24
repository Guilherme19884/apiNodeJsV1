import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import jwtConfig from '../utils/jwtConfig'

export const authMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const token = request.headers['authorization']

  if (!token) {
    return response.status(401).json({ message: 'No token provided' })
  }

  jwt.verify(token, jwtConfig.secret, (err, decoded) => {
    if (err) {
      return response.status(401).json({ message: 'Invalid token' })
    }

    request.userId = decoded.id
    next()
  })
}
