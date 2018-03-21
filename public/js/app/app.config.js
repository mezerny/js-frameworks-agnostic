angular.module('mockApp')
    .config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {

        $routeProvider
            .when('/customers', {template: '<customer-list></customer-list>'})
            .when('/products', {template: '<product-list></product-list>'})
            .when('/invoices', {template: '<invoice-list></invoice-list>'})
            .otherwise('/invoices');
    }
]);