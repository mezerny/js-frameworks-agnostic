angular.module('invoiceForm')
    .directive('autoSaveForm', ['$timeout', '$log', function ($timeout, $log) {
        return {
            require: ['^form'],
            link: function ($scope, $element, $attrs, $ctrls) {
                var $formCtrl = $ctrls[0];
                var savePromise = null;
                var expression = $attrs.autoSaveForm || 'true';

                $scope.$watchGroup(['$ctrl.totalSum', '$ctrl.discount', '$ctrl.customer'],function () {
                    if ($formCtrl.$valid && $formCtrl.$dirty) {
                        if (savePromise) {
                            $timeout.cancel(savePromise);
                        }
                        savePromise = $timeout(function () {
                            savePromise = null;
                            if ($formCtrl.$valid) {
                                if ($scope.$eval(expression) !== false) {
                                    $log.info('Form data persisted -- setting pristine');
                                    $formCtrl.$setPristine();
                                }
                            }
                        }, 5000);
                    }
                });
            }
        };
    }]);

