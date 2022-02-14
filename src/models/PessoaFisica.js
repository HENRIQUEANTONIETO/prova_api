const knex = require('../database/connection')

class PessoaFisica{
    async findAll(){
        try{
            let result = await knex.select('*').table('pessoa_fisica')
            return {status: true, result: result}
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        }
    }    

    async findById(id){
        try{
            let result = await knex.select().table('pessoa_fisica').where({pessoa_fisica: id})
            if (result.length > 0){
                return {status: true, result: result}
            }
            else{
                return {status: false, err: "Esta pessoa_fisica não existe"}
            }
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        }
    }

    async create(pessoa_fisica, cpf, identidade){
        
        try{
            let result = await knex.insert({pessoa_fisica, cpf, identidade}).table('pessoa_fisica')
            return {status: true, result: result}
        }   
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        } 
    }

    async update(pessoa_fisica, cpf, identidade){
        try{
            let PessoaFisicaUpdated = {cpf, identidade}
            let pessoa_fisicaExist = await this.findById(pessoa_fisica)
            if (pessoa_fisicaExist.status){
                let result = await knex.update(PessoaFisicaUpdated).table('pessoa_fisica').where({pessoa_fisica: pessoa_fisica})
                return {status: true, result: result} 
            }
            else{
                return {status: false, err: 'Esta pessoa_fisica não existe'}      
            }
               
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}    
        }
    }

    async delete(pessoa_fisica){
        try{
            let result = await knex.delete().table('pessoa_fisica').where({pessoa_fisica: pessoa_fisica})
            return {status: true, result: result}
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}  
        }
    }

    // async validateFields(...fields){
    //     let error = []
    //     fields.forEach(field => {
    //         if(field == undefined || !field.trim()){
    //             error.push(field)
    //         }  
    //     });
    //     if (error.length > 0){
    //         return {status: false, err:  `Preencha todos os campos`}
    //     } 
    //     return {status: true}
    // }

}


module.exports = new PessoaFisica()