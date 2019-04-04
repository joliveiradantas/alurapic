angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
    //atraves do servico routeProvider que obtenho atraves da injecao, dentro da funcao config
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/fotos/', {

            //o angular precisa saber que o endereco que estamos tentando acessar nao é um endereco do server
            //para isso adicionamos o #
            //o index é carregado mas atraves do sist. de rotas vai buscar a parcial
            //Com o HTML5 e a History App foi possivel conseguir o mesmo resultado sem o #
            //Ativo esse servico atraves de $locationProvider que peco atraves do sist. de injecao de dependencias

            templateUrl: 'partials/principal.html',
            controller: 'FotosController'

        });

        //Se el usuario digita uma rota que nao existe redireciono para a principal
        $routeProvider.otherwise({redirectTo: '/fotos'});
    });
