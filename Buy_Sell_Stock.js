// SOlution 1:- Brute Force
const stock = [7,1,5,3,6,4];
function stock1(stock)
{
   let globalProfit = 0;
   for(let i=0;i<stock.length-1;i++)
   {
    for(let j=i+1;j<stock.length;j++)
    {
       const currentProfit = stock[j] - stock[i];
       if(currentProfit > globalProfit) globalProfit = currentProfit;
    }
   }
   return globalProfit;
}

console.log(stock1(stock));




//Solution 2 :- Greedy Algorithm

function stock2(stock)
{
   let minStockPrice = stock[0];
   let maxProfit = 0;
   for(let i=1;i<stock.length;i++)
   {
    if(stock[i] < minStockPrice)
    {
        minStockPrice = stock[i];
    }
    let currentProfit1 = stock[i] - minStockPrice;
    maxProfit = Math.max(currentProfit1 , maxProfit); 

    
   }
   return maxProfit
}

console.log(stock2(stock));

