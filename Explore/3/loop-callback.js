

var names=['mohsin','jakir','patil','kaki','chachi','malini'];

function operation(names,callback)
{
for(i=0;i<=names.length;i++)
{
callback(names[i]);
}
}


function print(name)
{
console.log(name);
}


operation(names,print);