'use strict';

/**
 * @ngdoc function
 * @name demoProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoProjectApp
 */
demoProjectApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
   {
      "Name":"Alfreds Futterkiste",
      "City":"Berlin",
      "Country":"Germany"
   },
   {
      "Name":"Ana Trujillo Emparedados y helados",
      "City":"México D.F.",
      "Country":"Mexico"
   },
   {
      "Name":"Antonio Moreno Taquería",
      "City":"México D.F.",
      "Country":"Mexico"
   },
   {
      "Name":"Around the Horn",
      "City":"London",
      "Country":"UK"
   },
   {
      "Name":"B's Beverages",
      "City":"London",
      "Country":"UK"
   },
   {
      "Name":"Berglunds snabbköp",
      "City":"Luleå",
      "Country":"Sweden"
   },
   {
      "Name":"Blauer See Delikatessen",
      "City":"Mannheim",
      "Country":"Germany"
   },
   {
      "Name":"Blondel père et fils",
      "City":"Strasbourg",
      "Country":"France"
   },
   {
      "Name":"Bólido Comidas preparadas",
      "City":"Madrid",
      "Country":"Spain"
   },
   {
      "Name":"Bon app'",
      "City":"Marseille",
      "Country":"France"
   },
   {
      "Name":"Bottom-Dollar Marketse",
      "City":"Tsawassen",
      "Country":"Canada"
   },
   {
      "Name":"Cactus Comidas para llevar",
      "City":"Buenos Aires",
      "Country":"Argentina"
   },
   {
      "Name":"Centro comercial Moctezuma",
      "City":"México D.F.",
      "Country":"Mexico"
   },
   {
      "Name":"Chop-suey Chinese",
      "City":"Bern",
      "Country":"Switzerland"
   },
   {
      "Name":"Comércio Mineiro",
      "City":"São Paulo",
      "Country":"Brazil"
   }
]
  });

demoProjectApp.controller('DTInstancesCtrl', DTInstancesCtrl);
function DTInstancesCtrl(DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.dtInstances = [];
    vm.dtOptions1 = DTOptionsBuilder.fromSource('/data/users.json')
        .withDisplayLength(2)
        .withPaginationType('full_numbers');
    vm.dtColumns1 = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name')
    ];
    vm.dtInstance1 = {};

    vm.dtOptions2 = DTOptionsBuilder.fromSource('data1.json');
    vm.dtColumns2 = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
    ];
    vm.dtInstance2 = {};
    vm.dtInstanceCallback = dtInstanceCallback;

    function dtInstanceCallback(dtInstance) {
        vm.dtInstance2 = dtInstance;
    }
}
