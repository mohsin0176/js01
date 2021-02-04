var arr=[5,7,4,3,6,9,1,3];
var new_arr=[];

new_arr=arr.map(function(value)
{
  return value-2;
});
console.log(new_arr);