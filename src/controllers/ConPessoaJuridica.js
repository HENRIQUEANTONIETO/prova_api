const PessoaJuridica = require('../models/PessoaJuridica')

class ConPessoaJuridica{
    async index(req, res){
        let data = await PessoaJuridica.findAll()
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
        let data = await PessoaJuridica.findById(req.params.id)
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
        let {pessoa_juridica, cnpj, inscricao_estadual} = req.body
        let data = await PessoaJuridica.create(pessoa_juridica, cnpj, inscricao_estadual)
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
        let {pessoa_juridica, cnpj, inscricao_estadual} = req.body
        
        let data = await PessoaJuridica.update(pessoa_juridica, cnpj, inscricao_estadual)
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
        let data = await PessoaJuridica.delete(req.params.id)

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

module.exports = new ConPessoaJuridica()