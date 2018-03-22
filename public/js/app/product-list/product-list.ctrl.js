angular.module('productList')
.controller('ProductListController', ['Product', function(Product){
    this.products = Product.all();
}]);