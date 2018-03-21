angular.module('invoiceList')
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