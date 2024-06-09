import { HttpResponse } from "../entity/http-response-entity"

export const ok = async (data:any): Promise< HttpResponse > => {
    return {
        statusCode: 200,
        body: data
    }
}

export const created = async (): Promise < HttpResponse >=> {
    return {
        statusCode: 201,
        body: {message: "sucesful"}
    }
}

export const noContent = async (): Promise < HttpResponse >=> {
    return {
        statusCode: 204,
        body: null
    }
}