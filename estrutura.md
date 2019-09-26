https://sequelize.org/master/manual/data-types.html

estrutura pm2

tudo está voltando pelo bin/www.js, sendo assim qualquer rota deve ter o export no final

o app.js está fazendo a orquestra das rotas, enviando cada chamada para a pasta routes


criando sequelize configs
./node_modules/.bin/sequelize init 


criando migrations
node_modules/.bin/sequelize migration:create --name=grupo_telefone_app

subindo migration
node_modules/.bin/sequelize db:migrate

drop tables migration
node_modules/.bin/sequelize db:migrate:undo
node_modules/.bin/sequelize db:migrate:undo:all

associacoes model
https://stackoverflow.com/questions/45501856/associate-different-models-using-sequelize