import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class HouseService{
    async getAll(query = {}) {
        return await dbContext.Houses.find(query)
    }
    async getOne(id) {
        let houseFound = await dbContext.Houses.findById(id)
        if(!houseFound){
            throw new BadRequest("No car exists with that Id")
        }
        return houseFound
    }
}
export const houseService = new HouseService()