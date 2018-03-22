angular.module('invoiceForm')
.controller('InvoiceFormController', ['Product', 'Customer', 'Invoice', function(Product, Customer, Invoice){
    var ctrl = this;
    ctrl.products = Product.all();
    ctrl.customers = Customer.all(function(customers){
        ctrl.customer = customers[0];
    });
    ctrl.discount = 0;
    ctrl.totalSum = 0;
    ctrl.total = function(){
        ctrl.totalSum =  (ctrl.products.filter(function(product){
            return product.selected;
        }).reduce(function(subtotal, selectedProduct, index, array){
            return subtotal + selectedProduct.price * selectedProduct.amount;
        }, 0) * (100 - ctrl.discount) / 100).toFixed(2);
        return ctrl.totalSum;
    };
    ctrl.saveInvoice = function(){
            var invoice = new Invoice({customer_id: ctrl.customer.id, discount: ctrl.discount, total: ctrl.total()});
            invoice.$save();
            ctrl.close({$value: invoice});
    };
}]);