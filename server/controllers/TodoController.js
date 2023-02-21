import {Todo} from '../models/models.js'
import ApiError from '../error/ApiError.js'

class TodoController {
    async create(req, res, next) {
        try{
            let {title, ending, creation, created} = req.body
            const todo = await Todo.create({title, ending, creation,created})
            return res.json(todo)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const {listId} = req.query
        let todos;
        if (listId) {
            todos = await Todo.findAll({where: {listId}})
        } else {
            todos = await Todo.findAll()
        }
        return res.json(todos)
    }

    async delete(req) {
        const {id} = req.params
        await Todo.destroy({where: {id}})
    }

    async getOne(req, res) {
        const {id} = req.params
        const todo = await Todo.findOne({where: {id}})
        return res.json(todo)
    }
    async update(req, res) {
        const {id} = req.params
        let {created, title} = req.body
        const todo = await Todo.update({created, title},
            {where: {id}})
        return res.json(todo)
    }
}

export default new TodoController