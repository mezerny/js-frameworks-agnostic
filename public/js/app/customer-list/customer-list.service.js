angular.module('customerList')
    .factory('Customer', ['$resource', function ($resource) {
        return $resource('api/customers', {}, {
            all: {
                method: 'GET',
                isArray: true
            }
        })
    }]);