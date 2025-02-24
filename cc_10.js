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






