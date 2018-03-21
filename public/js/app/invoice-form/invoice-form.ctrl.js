angular.module('invoiceForm')
.controller('InvoiceFormController', ['Customer', function(Customer){
    this.customers = Customer.all();
}]);