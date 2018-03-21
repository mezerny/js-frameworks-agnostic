angular.module('productList')
.controller('ProductListController', ['Product', function(Product){
    this.products = Product.all();

    this.total = function(){
        return this.products.filter(function(product){
            return product.selected;
        }).reduce(function(subtotal, selectedProduct){
            return (subtotal + selectedProduct.price * selectedProduct.amount).toFixed(2);
        }, 0) * (100 - this.discount) / 100;
    };

    this.discount = 0;


}]);