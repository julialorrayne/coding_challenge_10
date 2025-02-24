////Task 1: Creating a Product Class
class Product {  //// Create a class Product 
    constructor(name,id,price,stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };
    getDetails() { //// Add a method getDetails() that returns a formatted string of product details.
        return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock:${this.stock}`;
    };
    updateStock(quantity) {  //// Add a method updateStock(quantity) that modifies the stock level when an order is placed.
        this.stock -= quantity;
    };
};

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

//Task 2: Creating an Order Class
class Order {
    constructor(orderid, product, quantity) {
        this.orderid = orderid;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity);
    };
    getOrderDetails() {
        return `Order ID: ${this.orderid}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price*this.quantity}`;   
    };
}

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)





