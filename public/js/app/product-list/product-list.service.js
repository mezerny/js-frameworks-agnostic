angular.module('productList')
    .factory('Product', ['$resource', function ($resource) {
        return $resource('api/products', {}, {
            all: {
                method: 'GET',
                isArray: true
            }
        })
    }]);