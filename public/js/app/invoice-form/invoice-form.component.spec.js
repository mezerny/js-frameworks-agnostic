describe('invoiceForm', function () {

    // Load the module that contains the `invoiceForm` component before each test
    beforeEach(module('invoiceForm'));

    // Test the controller
    describe('InvoiceFormController', function () {
        beforeEach(inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('api/products').respond([
                {id: 1, name: 'first product', price: 1.99},
                {id: 2, name: 'second product', price: 0.99}
            ]);
            $httpBackend.expectGET('api/customers').respond([
                {id:1, name: 'Sherlock Holmes', address: 'Backer Street 221b', phone: '987654321'},
                {id:2, name: 'Harry Potter', address: '4 Privet Drive', phone: '123456789'}
            ]);
            ctrl = $componentController('invoiceForm');
        }));
        it('should initialize total with 0', function () {
            expect(ctrl.totalSum).toBe(0);
        });
        it('should update total on product selection having selected several products', function(){
            $httpBackend.flush();
            ctrl.products[0].selected = true;
            ctrl.products[0].amount = 1;
            ctrl.products[1].selected = true;
            ctrl.products[1].amount = 1;
            expect(ctrl.total()).toBe('2.98');
            expect(ctrl.totalSum).toBe(2.98);
        });

        it('should update total on product selection taking amount into account', function () {
            $httpBackend.flush();
            ctrl.products[0].selected = true;
            ctrl.products[0].amount = 2;
            expect(ctrl.total()).toBe('3.98');
            expect(ctrl.totalSum).toBe(3.98);
        });

        it('should update total on product selection taking discount into account', function () {
            $httpBackend.flush();
            ctrl.products[1].selected = true;
            ctrl.products[1].amount = 5;
            ctrl.discount = 10;
            expect(ctrl.total()).toBe('4.46');
            expect(ctrl.totalSum).toBe(0.99*5*0.9);
        })

    });

});