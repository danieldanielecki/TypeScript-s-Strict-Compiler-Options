class TotalAmount {
  itemPrice: number;
  tax: number;

  constructor(itemPrice: number, tax: number) {
    this.itemPrice = itemPrice;
    this.tax = tax;
  }

  calculateTotalAmount() {
    return function (this: TotalAmount) {
      return this.itemPrice * this.tax;
    };
  }
}
