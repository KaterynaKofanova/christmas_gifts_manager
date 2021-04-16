export interface cart {
  id: number;
  userId: number;
  name: name;
  products: product[];
}

export interface product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
  approvedQuantity: number;
}

export interface name {
  firstname: string;
  lastname: string;
}

export interface apiCart {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
}

export interface apiCartPost {
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
}

export interface apiProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface apiUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}
