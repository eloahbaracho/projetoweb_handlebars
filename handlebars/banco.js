const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso")
}).cath(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const Agendamentos = sequelize.define("agendamentos",
{nome: {type: Sequelize.STRING}},
{telefone: {type: Sequelize.STRING}},
{origem: {type: Sequelize.STRING}},
{data: { type: Sequelize.DATE}},
{observacao: {type: Sequelize.STRING}}
)

//Agendamentos.sync ({force: true})