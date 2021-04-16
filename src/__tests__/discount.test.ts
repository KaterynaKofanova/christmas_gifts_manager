import { checkDiscount } from "../utils";

describe("checkDiscount", function () {
  it("should give 20% discount if the same product is approved in two different carts", function () {
    let carts = [
      {
        id: 1,
        userId: 1,
        name: {
          firstname: "first",
          lastname: "second",
        },
        products: [
          {
            id: 1,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 100,
            quantity: 2,
            approvedQuantity: 1,
          },
          {
            id: 3,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 50,
            quantity: 2,
            approvedQuantity: 1,
          },
        ],
      },
      {
        id: 2,
        userId: 2,
        name: {
          firstname: "first",
          lastname: "second",
        },
        products: [
          {
            id: 1,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 100,
            quantity: 2,
            approvedQuantity: 1,
          },
          {
            id: 2,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 50,
            quantity: 2,
            approvedQuantity: 0,
          },
        ],
      },
    ];
    const discount = checkDiscount(carts);
    expect(discount).toBe(40);
  });
  it("should give 0 discount if the same products are not approved in different carts", function () {
    let carts = [
      {
        id: 1,
        userId: 1,
        name: {
          firstname: "first",
          lastname: "second",
        },
        products: [
          {
            id: 1,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 100,
            quantity: 2,
            approvedQuantity: 1,
          },
          {
            id: 3,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 50,
            quantity: 2,
            approvedQuantity: 1,
          },
        ],
      },
      {
        id: 2,
        userId: 2,
        name: {
          firstname: "first",
          lastname: "second",
        },
        products: [
          {
            id: 1,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 100,
            quantity: 2,
            approvedQuantity: 0,
          },
          {
            id: 2,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 50,
            quantity: 2,
            approvedQuantity: 1,
          },
        ],
      },
    ];
    const discount = checkDiscount(carts);
    expect(discount).toBe(0);
  });
  it("should give 30% discount if the same product is approved in three different carts", function () {
    let carts = [
      {
        id: 1,
        userId: 1,
        name: {
          firstname: "first",
          lastname: "second",
        },
        products: [
          {
            id: 1,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 100,
            quantity: 2,
            approvedQuantity: 1,
          },
          {
            id: 3,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 50,
            quantity: 2,
            approvedQuantity: 1,
          },
        ],
      },
      {
        id: 2,
        userId: 2,
        name: {
          firstname: "first",
          lastname: "second",
        },
        products: [
          {
            id: 1,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 100,
            quantity: 2,
            approvedQuantity: 1,
          },
          {
            id: 2,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 50,
            quantity: 2,
            approvedQuantity: 0,
          },
        ],
      },
      {
        id: 3,
        userId: 3,
        name: {
          firstname: "first",
          lastname: "second",
        },
        products: [
          {
            id: 1,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 100,
            quantity: 2,
            approvedQuantity: 2,
          },
          {
            id: 2,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 50,
            quantity: 2,
            approvedQuantity: 0,
          },
        ],
      },
    ];
    const discount = checkDiscount(carts);
    expect(discount.toFixed(2)).toBe("90.00");
  });
  it("should give 20% discount for each product if two  products are approved in two different carts", function () {
    let carts = [
      {
        id: 1,
        userId: 1,
        name: {
          firstname: "first",
          lastname: "second",
        },
        products: [
          {
            id: 1,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 100,
            quantity: 2,
            approvedQuantity: 1,
          },
          {
            id: 3,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 50,
            quantity: 2,
            approvedQuantity: 1,
          },
        ],
      },
      {
        id: 2,
        userId: 2,
        name: {
          firstname: "first",
          lastname: "second",
        },
        products: [
          {
            id: 1,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 100,
            quantity: 2,
            approvedQuantity: 1,
          },
          {
            id: 3,
            title: "product1",
            category: "category1",
            description: "description",
            image: "link",
            price: 50,
            quantity: 2,
            approvedQuantity: 1,
          },
        ],
      },
    ];
    const discount = checkDiscount(carts);
    expect(discount).toBe(60);
  });
});
