angular.module('productList')
.controller('ProductListController', ['Product', 'Customer', 'Invoice', function(Product, Customer, Invoice){
    var ctrl = this;
    ctrl.products = Product.all();
    ctrl.customers = Customer.all();
    ctrl.customer = {};
    ctrl.total = function(){
        return (ctrl.products.filter(function(product){
            return product.selected;
        }).reduce(function(subtotal, selectedProduct, index, array){
            return subtotal + selectedProduct.price * selectedProduct.amount;
        }, 0) * (100 - ctrl.discount) / 100).toFixed(2);
    };
    ctrl.saveInvoice = function(){
        var invoice = new Invoice({customer_id: ctrl.customer.id, discount: ctrl.discount, total: ctrl.total()});
        invoice.$save();
    };
    ctrl.discount = 0;
}]);