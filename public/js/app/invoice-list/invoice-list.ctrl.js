angular.module('invoiceList')
.controller('InvoiceListController', ['$scope', 'Invoice', function($scope, Invoice){
    this.invoices = Invoice.all();
}]);