// Fourth Task : 
interface Product {
    name: string ;
    price: number;
}

function total(products: Product[]): number {
    return products.reduce((acc, product) => acc + product.price, 0);
}
const products: Product[] = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.75 },
    { name: "Orange", price: 1.25 },
];
const totalCost = total(products);
console.log(totalCost + "$");


// Fifth Task :
function isValidEmail(email: string): boolean {
  // From Google , i find these regular expression for email :
  const emailExpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailExpression.test(email);
}

console.log(isValidEmail("example@domain.com")); //  true
console.log(isValidEmail("user@.com")); //  false
