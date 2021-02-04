function person(name,email)
{
	this.name=name;
	this.email=email;

}
var p1=new person('mohsin','msnju2010@gmail.com');
var p2=new person('mayen','bnju2010@gmail.com');
var p3=new person('sayeed','cnnju2010@gmail.com');

var people=[p1,p2,p3];

people.forEach(function(element){

console.log('Name is :'+element.name+' And '+'Email is:'+element.email);

});