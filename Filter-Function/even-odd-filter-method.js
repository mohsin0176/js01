var arr=[12,5,14,52,62,21,30,78,42];
var even_arr=[];
var odd_arr=[];

var even_arr=arr.filter(function(value){
  return value%2==0;
});

console.log(even_arr);

var odd_arr=arr.filter(function(value){
  return value%2==1;
});

console.log(odd_arr);