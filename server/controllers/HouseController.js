import { houseService } from "../services/HouseService";
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
            res.send(await houseService.getAll(req.query))
        } catch (error) {
            next(error)
        }
    }
    async getOne(req, res, next) {
        try{
            res.send(await houseService.getOne(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try{
            res.send(await houseService.create(req.body))
        }catch (error) {
            next(error)
        }
    }
}