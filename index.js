var app = angular.module('app', []);

app.controller("myCtrl", myCtrl);

function myCtrl($scope){
    $scope.equip = [{
        class: 'css-bomb',
        title: 'Bomba CSS'
    }, {
        class: 'js-mite',
        title: 'Dinamite JS'
    }, {
        class: 'html-shield',
        title: 'Escudo HTML'
    }, {
        class: 'inkscape-sword',
        title: 'Espada do Inkscape'
    }, {
        class: 'potion-angular',
        title: 'Poção Angular'
    }, {
        class: 'potion-jquery',
        title: 'Poção JQuery'
    }];
    
    $scope.indice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    $scope.pergam = [{
        title: 'Ensino Médio',
        status: 'Completo',
        class: 'completo'
    }, {
        title: 'Ténico Informática - Escola SENAI Suiço-Brasileira',
        status: 'Completo',
        class: 'completo'
    }, {
        title: 'Ensino Superior - Design Gráfico - UNIP',
        status: 'Cursando',
        class: 'pendente'
    }, {
        title: 'Estágio - UNICORP Informática Industrial',
        status: 'Em Processo',
        class: 'pendente'
    }, {
        title: 'Pós-Graduação',
        status: 'Pendente',
        class: 'processo'
    }];
    
    $scope.skill = [{
        class: 'comunicacao',
        title: 'Comunicação',
        text: 'Disposto a buscar o diálogo com a equipe para realizar tal tarefa da melhor forma'
    }, {
        class: 'foco',
        title: 'Foco',
        text: 'Focado em realizar a tarefa designada a mim e ajudar a equipe com auxílio.'
    }, {
        class: 'curioso',
        title: 'Curioso',
        text: 'Buscando sempre uma forma nova de fazer a mesma coisa'
    }]
    
    $scope.onClickEvent = function(article) {
        let outro = $(`.container-grid section:last-of-type article:not(#${article[0].id})`);
        article.addClass('visible');
        outro.removeClass('visible');
    }
    
    $scope.clickedSkill = function() {
        $scope.onClickEvent($('#skills'));
    }
    
    $scope.clickedEquip = function() {
        $scope.onClickEvent($('#equips'));
    }
    
    $scope.clickedPergam = function() {
        $scope.onClickEvent($('#pergaminhos'));
    }
}