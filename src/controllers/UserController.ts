import { Request, Response } from 'express'
import { createUserService, deleteUserService, getOneUserService, getUsersService, updateUserService } from '../service/UserService'
import * as HttpResponse from '../utils/http-helper'
import { UserRepository } from '../repositories/UserRepository'
import { bcrypt } from 'bcrypt'
import jwtConfig from '../utils/jwtConfig'
import jwt from 'jsonwebtoken'


//Criar usuários
export const createUser = async (request: Request, response: Response) => {
    const bodyValue = request.body
    const httpResponse = await createUserService(bodyValue)

    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }else{
        const noContentResponse = HttpResponse.noContent();
        response.status((await noContentResponse).statusCode).json((await noContentResponse).body)
    }
    console.log(bodyValue)
}

// Listar usuários
export const getUsers = async (request: Request, response: Response): Promise<Response> => {
    const httpResponse = await getUsersService();
    return response.status(httpResponse.statusCode).json(httpResponse.body)
}

// Listar Único Usuário por Id
export const getOneUser = async (request: Request, response: Response): Promise<Response> => {
    const userId = Number(request.params.id) // Assume que o ID está sendo passado como parâmetro na URL
    const httpResponse = await getOneUserService(userId)

    return response.status(httpResponse.statusCode).json(httpResponse.body)
}

// Deletar usuário pelo id
export const deleteUser = async(request: Request, response: Response): Promise<Response> =>{
    const userId = Number(request.params.id)
    const httpResponse = await deleteUserService(userId)

    return response.json({Usuario :"Deletado com sucesso"})
    console.log('Usuário deletado com sucesso!')
}

//alterar usuário por Id
export const updateUser = async (request: Request, response: Response)=> {
    const id = parseInt(request.params.id)
    const bodyValue = request.body
    const httpResponse = await updateUserService(id, bodyValue)
    response.status(httpResponse.statusCode).json(httpResponse.body)
}

//Login
export const login = async(request: Request, response: Response) => {
    const { name, password } = request.body

    try {
        const user = await UserRepository.findOne({ where: { name } })
        if (!user) {
          return response.status(400).json({ message: 'User not found' })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
          return response.status(400).json({ message: 'Invalid password' })
        }
        const token = jwt.sign({ id: user.id, name: user.name }, jwtConfig.secret, {
          expiresIn: jwtConfig.expiresIn,
        })
    
        return response.status(200).json({ token })
      } catch (error) {
        console.error('Error during login:', error)
        return response.status(500).json({ message: 'Server error' })
      }
}