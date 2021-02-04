
 function Person(name)
 {
 	this.name=name;
 }
 Person.prototype.print=function()
 {
 	console.log('Name:'+this.name);
 }

 function Student(name,id)
 {
 	Person.call(this,name);
 	this.id=id;
 }
 var student=new Student('MOHSIN',1660);
 console.log(student);
 