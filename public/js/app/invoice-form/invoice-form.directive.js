angular.module('invoiceForm')
    .directive('autoSaveForm', ['$timeout', '$log', function ($timeout, $log) {
        return {
            require: ['^form'],
            link: function ($scope, $element, $attrs, $ctrls) {
                var $formCtrl = $ctrls[0];
                var savePromise = null;
                var expression = $attrs.autoSaveForm || 'true';

                $scope.$watchGroup(['$ctrl.totalSum', '$ctrl.discount', '$ctrl.customer'],function () {
                    if ($formCtrl.$dirty) {
                        if (savePromise) {
                            $timeout.cancel(savePromise);
                            $scope.$ctrl.countdownTimer.reset();
                        }
                        savePromise = $timeout(function () {
                            savePromise = null;
                            if ($scope.$ctrl.totalSum > 0) {
                                if ($scope.$eval(expression) !== false) {
                                    $log.info('Form data persisted -- setting pristine');
                                    $formCtrl.$setPristine();
                                }
                            }
                        }, 5000);
                        $scope.$ctrl.countdownTimer.start();
                    }
                });
            }
        };
    }]);

