import { HttpResponse } from "../entity/http-response-entity"

export const ok = async (data:any): Promise< HttpResponse > => {
    return {
        statusCode: 200,
        body: data
    }
}