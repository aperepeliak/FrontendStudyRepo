(function () {
    'use strict';

    var ProductListCtrl = function (productResource) {
        var vm = this;

        productResource.query(function (data) {
            vm.products = data;
        });

        vm.showImage = false;
        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        };
    };

    angular
        .module('productManagement')
        .controller('ProductListCtrl', ['productResource', ProductListCtrl]);
}());