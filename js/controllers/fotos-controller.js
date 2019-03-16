//nao passo o array de dependencia como segundo parametro, porque dessa forma estaria criando mais um modulo
//e na realidade eu quero usar o ja existente e criar um controller, pedindo sempre ao objeto global do angular
//1 Parametro : nome controller
//2 Parametro : funcao que define esse controller
//convencoes: nome do controller (camel case), arquivos js (minusculas, palavras separadas por hifen)
angular.module('alurapic').controller('FotosController', function(){

    var foto = {
        titulo : 'Leao',
        url : 'http://www.fundosanimais.com/imagens-wallpaper-leoes-jpg-800x600'
    };
});