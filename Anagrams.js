// Solution 1 :- Inbuilt functions

const anagram1 = function(str1 , str2)
{
    return str1.split("").sort().join("") === str2.split("").sort().join("")
    
}

console.log(anagram1("anagram" ,"nagraam"));
console.log(anagram1("anagram" ,"nagram"));
console.log(anagram1("rat" ,"cat"));



// Solution 2 :- objects

const anagram2 = function(str3, str4)
{
    if(str3.length !== str4.length) return false;

    let obj1= {};
    let obj2 = {};
    for(let i=0;i<str3.length;i++)
    {
        obj1[str3[i]] = (obj1[str3[i]] || 0) + 1;
        obj2[str4[i]] = (obj2[str4[i]] || 0) + 1;
    }

    for(const key in obj1)
    {
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;

}
console.log(anagram2("anagram","nagraam"));
console.log(anagram2("anagram" ,"nagram"));
console.log(anagram2("rat" ,"cat"));