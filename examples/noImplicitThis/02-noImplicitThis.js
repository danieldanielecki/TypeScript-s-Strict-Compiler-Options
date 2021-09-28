var TotalAmount = /** @class */ (function () {
    function TotalAmount(itemPrice, tax) {
        this.itemPrice = itemPrice;
        this.tax = tax;
    }
    TotalAmount.prototype.calculateTotalAmount = function () {
        return function () {
            return this.itemPrice * this.tax;
        };
    };
    return TotalAmount;
}());
