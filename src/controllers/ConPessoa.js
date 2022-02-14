const Pessoa = require('../models/Pessoa')

class ConPessoa{
    async index(req, res){
        let data = await Pessoa.findAll()
        if(data.status){
            res.status(200)
            res.json(data.result)
        }
        else{
            res.status(400)
            res.json(data.err)
        }
    } 

    async findById(req, res){
        let data = await Pessoa.findById(req.params.id)
        if(data.status){
            res.status(200)
            res.json(data.result)
        }
        else{
            res.status(400)
            res.json(data.err)
        }
    }

    async create(req, res){
        let {grupo, nome, tipo} = req.body
        let data = await Pessoa.create(grupo, nome, tipo)
        if(data.status){
            res.status(200)
            res.json(data.result)
        }
        else{
            res.status(400)
            res.json(data.err)
        }
    }

    async update(req, res){
        let {id, grupo, nome, tipo} = req.body
        
        let data = await Pessoa.update(id, grupo, nome, tipo)
        if(data.status){
            res.status(200)
            res.json(data.result)
        }
        else{
            res.status(400)
            res.json(data.err)
        } 
    }

    async delete(req, res){
        let data = await Pessoa.delete(req.params.id)

        if(data.status){
            res.status(200)
            res.json({data: data.result})
        }
        else{
            res.status(400)
            res.json({err: data.err})    
        }
    }
    
    
}

module.exports = new ConPessoa()