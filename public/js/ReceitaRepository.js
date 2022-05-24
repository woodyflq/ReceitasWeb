const Receita = require("./Receita")

class ReceitaRepository {

  constructor(){
    this.receitas = []
    this.count = 0
  }
  
  inserir(newReceita) {
    this.receitas.push(newReceita)
    this.count += 1
    console.log(this.receitas)
  }

  delete(id){
    this.receitas.splice(id, 1)
    console.log("delete" + id)
    this.count -= 1
  }

  update(receita){
    
  }
  

}

module.exports = ReceitaRepository