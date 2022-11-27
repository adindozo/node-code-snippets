const stocks = [ 
   {symbol: "AMZN", name: "Amazon", price: 23.67, units: 59}, 
   {symbol: "AMT", name: "American Tower", price: 11.22, units: 10}, 
   {symbol: "CAT", name: "Caterpillar Inc", price: 9.00, units: 100}, 
   {symbol: "APPL", name: "Amazon", price: 234.00, units: 59}, 
   {symbol: "AWK", name: "American Water", price: 100.00, units: 10}
 ];

 // your solutions here
for(let stock of stocks){
  stock.total = function()  {
    return this.price*this.units;
  }
}

stocks.forEach((stock) => {
  stock.totalForEach= function()  {
    return this.price*this.units;
  }
})

console.log(stocks.find((stock) => {
  return stock.symbol=='CAT';
}))

for(let i=0;i<stocks.length;i++){
  if(stocks[i].symbol=='CAT'){
    console.log(stocks[i]);
    break;
  }
}

console.log(stocks[0].totalForEach());
console.log(stocks[0].total());

let newArray = [];
let strings = [];
let strings2 = [];
let newArray2 = stocks.filter((stock) => {
  return stock.price<20 && stock.price>0;
});

for(let i=0;i<stocks.length;i++){
  if(stocks[i].price > 0 && stocks[i].price < 20){
    newArray.push(stocks[i]);
    
  }
}
console.log(newArray2);
console.log(newArray);

for(let i=0;i<stocks.length;i++){
  strings.push('<li>'+stocks[i].name+'</li>')
}

strings2 = stocks.map(stock => `<li>${stock.name}</li>`);
window.onload=function(){
for(let e of strings){
  document.querySelector('body').innerHTML+=e;
}
}
console.log(strings);
console.log(strings2);

console.log(stocks)
stocks.sort((a,b) => {
  return a.symbol.localeCompare(b.symbol);
})
console.log(stocks)

