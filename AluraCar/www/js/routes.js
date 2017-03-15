angular.module('starter')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('listagem', {
            url: '/listagem',
            templateUrl: 'template/listagem.html',
            controller: 'ListagemController'
        });

        $urlRouterProvider.otherwise('listagem');
    })