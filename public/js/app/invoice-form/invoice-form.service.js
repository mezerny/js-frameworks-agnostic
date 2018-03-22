//TODO[amezerny] extract services into shared core folder
angular.module('invoiceForm')
    .factory('Product', ['$resource', function ($resource) {
        return $resource('api/products', {}, {
            all: {
                method: 'GET',
                isArray: true
            }
        })
    }])
    .factory('Customer', ['$resource', function ($resource) {
    return $resource('api/customers', {}, {
        all: {
            method: 'GET',
            isArray: true
        }
    })
}])
    .factory('Invoice', ['$resource', function ($resource) {
    return $resource('api/invoices', {}, {
        all: {
            method: 'GET',
            isArray: true
        },
        save: {
            method: 'POST'
        }
    })
}]);