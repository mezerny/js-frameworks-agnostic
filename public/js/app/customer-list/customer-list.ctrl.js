angular.module('customerList')
.controller('CustomerListController', ['Customer', function(Customer){
    this.customers = Customer.all();
}]);