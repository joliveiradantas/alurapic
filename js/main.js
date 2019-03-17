//criacao do modulo principal (os modulos sao os blocos construtores da app, eles se combinam p conseguir diferentes funcionalidades
//esse sera o bloco principal o que vai ser iniciado assim que o navegador carregar minha pagina
//ele tambem é o responsavel de carregar os outros modulos

//atraves do objeto global angular (que se encontra disponivel depois que eu importei o script do
//angular core) que posso criar muitas tarefas
//chamo a funcao .module e passo como parametro o nome do modulo e suas dependencias, se omito estoy dizendo que
//quero usar um modulo ja existente
angular.module('alurapic', [])
