import { dbContext } from "../db/DbContext"

class HouseService{
    async getAll(query = {}) {
        return await dbContext.Houses.find(query)
    }
}
export const houseService = new HouseService()