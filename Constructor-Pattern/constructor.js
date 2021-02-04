function person(name,email,author)
{
	this.name=name;
	this.email=email;
	this.author=author;
	this.print=function(){
		console.log('Your Name is :'+this.name);
	}
	
	
}
var p1=new person('mohsin','msnju2010@gmail.com','hm khalid');
var p2=p1;

console.log(p1.constructor);
console.log(p2.constructor);