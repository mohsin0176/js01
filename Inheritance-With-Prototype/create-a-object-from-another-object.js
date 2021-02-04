
 function Person(name)
 {
 	this.name=name;
 }
 Person.prototype.print=function()
 {
 	console.log('Name:'+this.name);
 }
 Person.prototype.another=function()
 {
 	console.log('This is another Function');
 }

 function Student(name,id)
 {
 	Person.call(this,name);
 	this.id=id;
 }

Student.prototype=Object.create(Person.prototype); //all prototype of person has gone to  student object
Student.prototype.constructor=Student;//built permanently
var student=new Student('MOHSIN',1660);
  
 