import BaseController from "../utils/BaseController";

export class HouseController extends BaseController{
    constructor(){
        super('api/cars')
        this.router
            .get("", this.getAll)
            .get("/:id", this.getOne)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id,", this.delte)
    }

    async getAll(req, res, next) {
        try{
            res.send(await houseservice.getAll(req.query))
        } catch (error) {
            next(error)
        }
    }
}