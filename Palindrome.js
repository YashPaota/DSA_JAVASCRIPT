//Solution 1 :- This is with the help of inbuilt functions.
//+sign is basically converting the string to number.we can also use parseInt or Number to do so.
//the below code is perfect but it can be more optimized if we include a base condition of negative no.


const isPalindrome1 = function(x)
{
    if(x<0) return false
    return x === +x.toString().split("").reverse().join("")
}
const out = isPalindrome1(121);
console.log(out);



//Solution 2 :- with help of loops


const isPalindrome2 = function(num)
{
    let temp = num;
    
    let rev=0,rem =0 ;
    while(num>0)
    {
        rem = num % 10;
        rev = (rev*10) + rem;
        num = parseInt(num/10); 

    }
    return temp === rev

}

const out2 = isPalindrome2(121);
console.log(out2);
