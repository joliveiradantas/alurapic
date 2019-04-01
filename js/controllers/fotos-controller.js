angular.module('alurapic').controller('FotosController', function($scope, $http) {
    //$http - servico do angular responsavel de fazer requisicoes ajax.
    //É uma requisicao asincrona, nao se sabe qdo vai terminar
    //o que ele devolve é uma promessa

    $scope.fotos = [];

    $http.get('/v1/fotos')
    .success(function(retorno) {
        console.log(retorno);
        $scope.fotos = retorno; //nao precisa fazer retorno.data porque "retorno" nesse 
        //caso ja sao os dados que devolve o servidor
    })
    .error(function(erro) {
        console.log(erro);
    });
    
    //Cumpre a mesma funcao do $http.get de acima
    /*var promise = $http.get('/v1/fotos');
    promise.then(function(retorno) {
        $scope.fotos = retorno.data;
    })
    .catch(function(error) {
        console.log(error)
    });
    */
   
   //Dados de forma estática
    /*
   angular.module('alurapic').controller('FotosController', function($scope) {

    $scope.foto = {
        titulo: 'Leão',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

    $scope.foto2 = {
        titulo: 'Leão2',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

    $scope.foto3 = {
        titulo: 'Leão3',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

});
   */

});