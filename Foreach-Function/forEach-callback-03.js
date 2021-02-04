var arr=[10,23,5,14,87,20,6];


function loop(arr,callback)
{
	for(var i=0;i<arr.length;i++)
	{
		callback(arr[i],i);
	}
}


function print(element,i)
{
	console.log('Element is :'+element+'Index is:'+i+'Array is:'+arr);
}

loop(arr,print);