angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
    //atraves do servico routeProvider que obtenho atraves da injecao, dentro da funcao config
    .config(function($routeProvider) {

        $routeProvider.when('/fotos/', {

            //o angular precisa saber que o endereco que estamos tentando acessar nao é um endereco do server

            templateUrl: 'partials/principal.html',
            controller: 'FotosController'

        });
    });
