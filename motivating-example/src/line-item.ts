class LineItem {
  getInv(): Invoice {
    throw Error();
  }
  getProd(): Product {
    throw Error();
  }
  getQuantity(): number {
    throw Error();
  }
  getPercentDiscount(): number {
    throw Error();
  }
  getUnitPrice(): number {
    throw Error();
  }
  getExtendedPrice(): number {
    throw Error();
  }
}
