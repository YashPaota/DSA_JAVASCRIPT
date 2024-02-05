// Two sum return aither the indexes or the elements
//Solution 1 :- brute force 


const arr1 = [2,7,11,15];
const arr2 = [3,2,4];
const solu1 = function(arr , target)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i] + arr[j] === target)
            {
                return [i , j];
            }
        }
    }
    return -1;

}
console.log(solu1(arr1,9));
console.log(solu1(arr2,6));


// Solution 2 :- using objects

const solu2 = function(arr2 , target2)
{
    const obj = {};
    for(let i=0;i<arr2.length;i++)
    {
        var n = arr2[i];
        if(obj[target2-n] >= 0)
        {
           return [obj[target2 -n] , i];
        }else{
            obj[n] = i;
        }
    }
}

console.log(solu2(arr1,9));
console.log(solu2(arr2,6));