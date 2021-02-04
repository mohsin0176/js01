var arr=[12,5,14,52,62,21,30,78,42];
var even_arr=[];
var odd_arr=[];

for(var i=0;i<arr.length;i++)
{
if(arr[i]%2==0)

{
	even_arr.push(arr[i]);
}
else
{
	odd_arr.push(arr[i]);
}
}

console.log(even_arr);
console.log(odd_arr);