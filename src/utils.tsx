import { cart } from "./types";

interface uniqueProduct {
  id: number;
  price: number;
}

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const checkDiscount = (carts: cart[]): number => {
  const uniqueProductIds: uniqueProduct[] = carts.reduce(
    (acc: uniqueProduct[], val) => {
      val.products.forEach((product) => {
        if (!acc.find((a) => a.id === product.id)) {
          acc.push({ id: product.id, price: product.price });
        }
      });
      return acc;
    },
    []
  );
  let discounts: number = 0;
  uniqueProductIds.forEach((product) => {
    const quantity: number = carts.reduce((acc: number, val: cart) => {
      const exists = val.products.find((v) => v.id === product.id);
      if (exists && exists.approvedQuantity > 0) {
        acc += 1;
      }
      return acc;
    }, 0);
    if (quantity > 1) {
      discounts += quantity * 0.1 * product.price * quantity;
    }
  });
  return discounts;
};
