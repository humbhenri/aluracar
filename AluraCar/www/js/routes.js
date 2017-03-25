angular.module('starter')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                templateUrl: 'template/menu.html',
                abstract: true,
                controller: 'MenuController'
            })
            .state('app.listagem', {
                url: '/listagem',
                views: {
                    'menuContent' : {
                        templateUrl: 'template/listagem.html',
                        controller: 'ListagemController',
                    }
                }
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
            })
            .state('app.perfil', {
                url: '/perfil',
                views: {
                    'menuContent': {
                        templateUrl: 'template/perfil.html',
                        controller: 'PerfilController'
                    }
                }
            });


        $urlRouterProvider.otherwise('login');
    })
