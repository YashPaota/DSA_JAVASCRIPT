// Solution 1:- using for loop

var fib = function(n)
{
    const arr = [0,1];
    for(let i=2;i<=n;i++)
    {
        arr.push(arr[i-1] + arr[i-2]);
        
    }
    return arr[n];
}

const out1 = fib(15);
console.log(out1);


//Solution 2 :- Recursive Approach

var fib2 = function(n)
{
    if(n<=1) return n;    //base case

    return fib(n-1) + fib(n-2);
}
console.log(fib2(15));


//Solution 3 :- In One line using arrow function

const fib3 = (n) => (n<=1 ? n : fib(n-1) + fib(n-2))
console.log(fib3(15));