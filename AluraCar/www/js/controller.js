angular.module('starter')
    .controller('ListagemController', function ($scope, CarroService) {
        CarroService.obterCarros().then(function (dados) {
            $scope.listaDeCarros = dados;
        });
    })
    .controller('CarroEscolhidoController', function ($stateParams, $scope) {
        $scope.carroEscolhido = angular.fromJson($stateParams.carro);
        $scope.listaDeAcessorios = [{ "nome": "Freio ABS", "preco": 800 },
        { "nome": "Ar-condicionado", "preco": 1000 },
        { "nome": "MP3 Player", "preco": 500 }];

        $scope.mudou = function (acessorio, isMarcado) {

            if (isMarcado) {
                $scope.carroEscolhido.preco =
                    $scope.carroEscolhido.preco + acessorio.preco;
            } else {
                $scope.carroEscolhido.preco =
                    $scope.carroEscolhido.preco - acessorio.preco;
            }
        }
    })
    .controller('FinalizarPedidoController', function ($ionicPopup, $state, $stateParams, $scope, CarroService) {
        $scope.carroFinalizado = angular.fromJson($stateParams.carroEscolhido);

        $scope.pedido = {};

        $scope.finalizarPedido = function () {

            var pedidoFinalizado = {
                params: {
                    carro: $scope.carroFinalizado.nome,
                    preco: $scope.carroFinalizado.preco,
                    nome: $scope.pedido.nome,
                    endereco: $scope.pedido.endereco,
                    email: $scope.pedido.email,
                }
            };
            CarroService.salvarPedido(pedidoFinalizado).then(function (dados) {
                $ionicPopup.alert({
                    title: 'Parabéns',
                    template: 'Você acaba de comprar um carro.'
                }).then(function() {$state.go('listagem')});
            }, function(erro) {
                $ionicPopup.alert({
                    title: 'Erro',
                    template: 'Campos obrigatórios'
                });
            });
        }
    })
    .controller('LoginController', function($scope, CarroService, $ionicPopup, $state, $rootScope) {
        // login: joao@alura.com.br, senha: alura123
        $scope.login = {};
        $scope.fazerLogin = function() {
            var dados = {
                params: {
                    email: $scope.login.email,
                    senha: $scope.login.senha
                }
            }
            CarroService.fazerLogin(dados).then(function(dados) {
                $rootScope.usuario = dados.usuario;
                $state.go('app.listagem');
            }, function(erro){
                $ionicPopup.alert({
                    title: 'Opa!',
                    template: 'Email ou senha incorretos'
                })
            });
        };
    })
    .controller('MenuController', function($rootScope, $scope) {
        $scope.usuarioLogado = $rootScope.usuario;
    })
    .controller('PerfilController', function($rootScope, $scope) {
        $scope.usuarioLogado = $rootScope.usuario;
        $scope.estaEditando = false;
        $scope.textoBotao = 'Editar';
        $scope.acaoBotao = function(){
            $scope.estaEditando = !$scope.estaEditando;
            $scope.textoBotao = $scope.estaEditando ? 'Editar' : 'Salvar';
        };
    });
