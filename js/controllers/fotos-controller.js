//nao passo o array de dependencia como segundo parametro, porque dessa forma estaria criando mais um modulo
//e na realidade eu quero usar o ja existente e criar um controller, pedindo sempre ao objeto global do angular
//1 Parametro : nome controller
//2 Parametro : funcao que define esse controller
//convencoes: nome do controller (camel case), arquivos js (minusculas, palavras separadas por hifen)
angular.module('alurapic').controller('FotosController', function($scope){
    //o $scope indica a dependencia do controller e o Angular qdo ve esse nome injeta a dependencia 

    //variaveis declaradas dentro de funcao sao privadas, o escopo dela é dentro da funcao
    //adicionei ao objeto $scope dinamicamente a propriedade foto
    //tudo que é pendurado no $scope a view consegue ver
    //Isso se chama DATA BINDING, a associacao desse dado disponibilizado pelo controller
    //e que a view consegue ver. Qualquer atualizacao nesse dado se repercute na view
    $scope.foto = {
        titulo : 'Leao',
        url : 'http://www.fundosanimais.com/imagens-wallpaper-leoes-jpg-800x600'
    };
});