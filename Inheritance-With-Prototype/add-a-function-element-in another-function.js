function person()
{
	this.name='MOHSIN';
}
function teacher()
{
	this.subject='PHP';
	person.call(this);
}

var x= new teacher();
var y=x.subject;
console.log(y);