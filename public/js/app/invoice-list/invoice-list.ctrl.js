angular.module('invoiceList')
.controller('InvoiceListController', ['$uibModal', '$log', 'Invoice', function($uibModal, $log, Invoice){
    var ctrl = this;
    ctrl.invoices = Invoice.all();
    ctrl.recentlyAddedInvoice = {};
    ctrl.openModal = function(){
        var modalInstance = $uibModal.open({
            animation: true,
            component: 'invoiceForm',
            windowClass: 'app-modal-window'
        });
        modalInstance.result.then(function (createdInvoice) {
            ctrl.recentlyAddedInvoice = createdInvoice;
            ctrl.invoices.unshift(createdInvoice);

        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
    ctrl.highlightRecentlyAdded = function(invoice){
        return invoice.id === ctrl.recentlyAddedInvoice.id;
    }
}]);