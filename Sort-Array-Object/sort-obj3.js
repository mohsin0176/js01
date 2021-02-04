var people=[
{name:'mohsin',age:12},
{name:'jakir',age:32},
{name:'nayem',age:22},
{name:'jayed',age:52},
{name:'kair',age:10}
]
people.sort(function(a,b)
	{
		return a.name-b.name;
	});

console.log(people);