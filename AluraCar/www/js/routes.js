angular.module('starter')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('listagem', {
                url: '/listagem',
                templateUrl: 'template/listagem.html',
                controller: 'ListagemController'
            })
            .state('carroescolhido', {
                url: '/carroescolhido/:carro',
                templateUrl: 'template/carroescolhido.html',
                controller: 'CarroEscolhidoController'
            })
            .state('finalizarpedido', {
                url: '/finalizarpedido/:carroEscolhido',
                templateUrl: 'template/finalizarpedido.html',
                controller: 'FinalizarPedidoController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'template/login.html',
                controller: 'LoginController'
            });

        $urlRouterProvider.otherwise('login');
    })
