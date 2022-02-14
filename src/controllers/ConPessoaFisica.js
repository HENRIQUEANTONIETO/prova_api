const PessoaFisica = require('../models/PessoaFisica')

class ConPessoaFisica{
    async index(req, res){
        let data = await PessoaFisica.findAll()
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
        let data = await PessoaFisica.findById(req.params.id)
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
        let {pessoa_fisica, cpf, identidade} = req.body
        let data = await PessoaFisica.create(pessoa_fisica, cpf, identidade)
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
        let {pessoa_fisica, cpf, identidade} = req.body
        
        let data = await PessoaFisica.update(pessoa_fisica, cpf, identidade)
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
        let data = await PessoaFisica.delete(req.params.id)

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

module.exports = new ConPessoaFisica()