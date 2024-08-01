import { HttpResponse } from "../entities/http-response-entity"

export const ok = async (data:any): Promise< HttpResponse > => {
    return {
        statusCode: 200,
        body: data
    }
}

export const created = async(): Promise< HttpResponse > => {
    return {
        statusCode: 201,
        body: {message: "sucesful"}
    }
}

export const noContent = async(): Promise< HttpResponse > => {
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async(): Promise< HttpResponse > => {
    return {
        statusCode: 400,
        body: null
    }
}

export const unauthorized = async (): Promise<HttpResponse> => {
    return {
        statusCode: 401,
        body: null
    }
}

export const serverError = async(): Promise< HttpResponse > => {
    return {
        statusCode: 500,
        body: null
    }
}

export { HttpResponse }
