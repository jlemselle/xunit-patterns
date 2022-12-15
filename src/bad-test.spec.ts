import { deleteObject } from "./delete-object";

describe("add item quantity", () => {
  it("several quantity v1", () => {
    let billingAddress: Address | null = null;
    let shippingAddress: Address | null = null;
    let customer: Customer | null = null;
    let product: Product | null = null;
    let invoice: Invoice | null = null;
    try {
      //  Set  up  fixture
      billingAddress = new Address(
        "1222  1st  St  SW",
        "Calgary",
        "Alberta",
        "T2N  2V2",
        "Canada"
      );
      shippingAddress = new Address(
        "1333  1st  St  SW",
        "Calgary",
        "Alberta",
        "T2N  2V2",
        "Canada"
      );
      customer = new Customer(
        99,
        "John",
        "Doe",
        30,
        billingAddress,
        shippingAddress
      );
      product = new Product(88, "SomeWidget", 19.99);
      invoice = new Invoice(customer);
      //  Exercise  SUT
      invoice.addItemQuantity(product, 5);
      //  Verify  outcome
      const lineItems: LineItem[] = invoice.getLineItems();
      if (lineItems.length === 1) {
        let actItem: LineItem = lineItems[0];
        expect(invoice).toBe(actItem.getInv());
        expect(product).toBe(actItem.getProd());
        expect(5).toBe(actItem.getQuantity());
        expect(30).toBe(actItem.getPercentDiscount());
        expect(19.99).toBe(actItem.getUnitPrice());
        expect(69.96).toBe(actItem.getExtendedPrice());
      } else {
        expect(false).toBe(true);
      }
    } finally {
      //  Teardown
      deleteObject(invoice);
      deleteObject(product);
      deleteObject(customer);
      deleteObject(billingAddress);
      deleteObject(shippingAddress);
    }
  });
});
