const knex = require('../database/connection')

class Pessoa{
    async findAll(){
        try{
            let result = await knex.select('*').table('pessoa')
            return {status: true, result: result}
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        }
    }    

    async findById(id){
        try{
            let result = await knex.select().table('pessoa').where({codigo: id})
            if (result.length > 0){
                return {status: true, result: result}
            }
            else{
                return {status: false, err: "Esta pessoa não existe"}
            }
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        }
    }

    async create(grupo, nome, tipo){
        
        try{
            let result = await knex.insert({grupo, nome, tipo}).table('pessoa')
            return {status: true, result: result}
        }   
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        } 
    }

    async update(id, grupo, nome, tipo){
        try{
            let PessoaUpdated = {grupo, nome, tipo}
            let pessoaExist = await this.findById(id)
            if (pessoaExist.status){
                let result = await knex.update(PessoaUpdated).table('pessoa').where({codigo: id})
                return {status: true, result: result} 
            }
            else{
                return {status: false, err: 'Esta pessoa não existe'}      
            }
               
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}    
        }
    }

    async delete(id){
        try{
            let result = await knex.delete().table('pessoa').where({codigo: id})
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


module.exports = new Pessoa()