function person()
{
	this.name='MOHSIN';
	console.log(this);
}
function teacher()
{
	this.subject='PHP';
	person.call(this);
}

var x= new teacher();
var y=x.subject;
console.log(y);