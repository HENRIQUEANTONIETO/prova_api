const knex = require('../database/connection')

class Telefone{
    async findAll(){
        try{
            let result = await knex.select('*').table('pessoa_telefone')
            return {status: true, result: result}
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        }
    }    

    async findById(id){
        try{
            let result = await knex.select().table('pessoa_telefone').where({autoinc: id})
            if (result.length > 0){
                return {status: true, result: result}
            }
            else{
                return {status: false, err: "Este telefone não existe"}
            }
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        }
    }

    async findByPessoa(id){
        try{
            let result = await knex.select().table('pessoa_telefone').where({pessoa_telefone: id})
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

    async create(pessoa_telefone, telefone){
        try{
            let result = await knex.insert({pessoa_telefone, telefone}).table('pessoa_telefone')
            return {status: true, result: result}
        }   
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}
        } 
    }

    async update(id, telefone){
        try{
            let pessoa_telefoneExist = await this.findById(id)
            if (pessoa_telefoneExist.status){
                let result = await knex.update({telefone}).table('pessoa_telefone').where({autoinc: id})
                return {status: true, result: result} 
            }
            else{
                return {status: false, err: 'Esta telefone não existe'}      
            }
               
        }
        catch(err){
            console.log(err)
            return {status: false, err: 'Houve um erro interno no sistema'}    
        }
    }

    async delete(id){
        try{
            let result = await knex.delete().table('pessoa_telefone').where({autoinc: id})
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


module.exports = new Telefone()