var arr=[12,5,14,52,62,21,30,78,42];
var even_arr=[];
var odd_arr=[];

function loop(arr,callback1,callback2)
{
	for(var i=0;i<=arr.length;i++)
	{
		if(arr[i]%2==0)
		{
			even_arr.push(arr[i]);
			callback1(even_arr);
		}
		else
		{
			odd_arr.push(arr[i]);
			callback2(odd_arr);
		}
	}
}
function even(eve)
{
  console.log(eve);
}
function odd(od)
{
 console.log(od);
}

loop(arr,even,odd);