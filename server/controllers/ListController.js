import {List} from "../models/models.js";
import ApiError from '../error/ApiError.js'


class ListController {
    async create(req, res, next) {
        try{
            const {title} = req.body
            const list = await List.create({title})
            return res.json(list)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const lists = await List.findAll()
        return res.json(lists)
    }

    async delete(req, res) {
        const {id} = req.params
        await List.destroy({where: {id}})
        return res.set(204)
    }

    async getOne(req, res) {
        const {id} = req.params
        const list = await List.findOne({where: {id}})
        return res.json(list)
    }
}

export default new ListController