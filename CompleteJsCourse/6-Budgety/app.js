var budgetController = (function () {
    'use strict';

    var Expense = function (id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
    };

    var Income = function (id, desc, value) {
        this.id = id;
        this.desc = desc;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, desc, val) {
            var ID = data.allItems[type].length > 0 ?
                data.allItems[type][data.allItems[type].length - 1].id + 1 : 0;

            var newItem = type === 'exp' ?
                new Expense(ID, desc, val) :
                new Income(ID, desc, val);

            data.allItems[type].push(newItem);

            return newItem;
        }

    };
})();

var UIController = (function () {
    'use strict';

    var DOMstrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDesc).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();

var controller = (function (budgetCtrl, UICtrl) {
    'use strict';





    var onAddItem = function () {
        var input = UICtrl.getInput();
        var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    };


    var wireEvents = function () {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', onAddItem);
        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) onAddItem();
        });
    };

    return {
        init: wireEvents
    };

})(budgetController, UIController);

controller.init();