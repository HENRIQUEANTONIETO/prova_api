const knex = require('../database/connection')

class PessoaJuridica{
    async findAll(){
        try{
            let result = await knex.select('*').table('pessoa_juridica')
            return {status: true, result: result}
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        }
    }    

    async findById(id){
        try{
            let result = await knex.select().table('pessoa_juridica').where({pessoa_juridica: id})
            if (result.length > 0){
                return {status: true, result: result}
            }
            else{
                return {status: false, err: "Esta pessoa_juridica não existe"}
            }
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        }
    }

    async create(pessoa_juridica, cnpj, inscricao_estadual){
        
        try{
            let result = await knex.insert({pessoa_juridica, cnpj, inscricao_estadual}).table('pessoa_juridica')
            return {status: true, result: result}
        }   
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        } 
    }

    async update(pessoa_juridica, cnpj, inscricao_estadual){
        try{
            let PessoaJuridicaUpdated = {cnpj, inscricao_estadual}
            let pessoa_juridicaExist = await this.findById(pessoa_juridica)
            if (pessoa_juridicaExist.status){
                let result = await knex.update(PessoaJuridicaUpdated).table('pessoa_juridica').where({pessoa_juridica: pessoa_juridica})
                return {status: true, result: result} 
            }
            else{
                return {status: false, err: 'Esta pessoa_juridica não existe'}      
            }
               
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}    
        }
    }

    async delete(pessoa_juridica){
        try{
            let result = await knex.delete().table('pessoa_juridica').where({pessoa_juridica: pessoa_juridica})
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


module.exports = new PessoaJuridica()