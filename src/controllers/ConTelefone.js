const Telefone = require('../models/Telefone')

class ConTelefone{
    async index(req, res){
        let data = await Telefone.findAll()
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
        let data = await Telefone.findById(req.params.id)
        if(data.status){
            res.status(200)
            res.json(data.result)
        }
        else{
            res.status(400)
            res.json(data.err)
        }
    }

    async findByPessoa(req, res){
        let data = await Telefone.findByPessoa(req.params.id)
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
        let {pessoa_telefone, telefone} = req.body
        let data = await Telefone.create(pessoa_telefone, telefone)
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
        let {autoinc, telefone} = req.body
        
        let data = await Telefone.update(autoinc, telefone)
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
        let data = await Telefone.delete(req.params.id)

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

module.exports = new ConTelefone()