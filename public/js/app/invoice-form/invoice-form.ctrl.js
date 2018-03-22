angular.module('invoiceForm')
.controller('InvoiceFormController', ['Product', 'Customer', 'Invoice', '$timeout', function(Product, Customer, Invoice, $timeout){
    var ctrl = this;
    ctrl.products = Product.all();
    ctrl.customers = Customer.all(function(customers){
        ctrl.customer = customers[0];
    });
    ctrl.discount = 0;
    ctrl.totalSum = 0;
    ctrl.countdownTimer = {
        counter: 6,
        start: function(){
            ctrl.countdownTimer.reset();
            ctrl.countdownTimer.countdownTimeout = $timeout(ctrl.countdownTimer.onTimeout);
        },
        onTimeout: function(){
            if (ctrl.countdownTimer.counter > 1) {
                ctrl.countdownTimer.counter--;
                ctrl.countdownTimer.countdownTimeout = $timeout(ctrl.countdownTimer.onTimeout, 1000);
            }

        },
        reset: function(){
            $timeout.cancel(ctrl.countdownTimer.countdownTimeout);
            ctrl.countdownTimer.counter = 6;
        }};
    ctrl.total = function(){
        ctrl.totalSum =  (ctrl.products.filter(function(product){
            return product.selected;
        }).reduce(function(subtotal, selectedProduct, index, array){
            return subtotal + selectedProduct.price * selectedProduct.amount;
        }, 0) * (100 - ctrl.discount) / 100);
        return ctrl.totalSum.toFixed(2);
    };
    ctrl.saveInvoice = function(){
            var invoice = new Invoice({customer_id: ctrl.customer.id, discount: ctrl.discount, total: ctrl.total()});
            invoice.$save();
            ctrl.close({$value: invoice});
            
    };
}]);