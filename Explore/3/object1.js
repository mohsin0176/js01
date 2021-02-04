var person={};
person.name='MOHSIN';
person.age=65;
person.moral='Man Is Mortal';
person.print=function()
{
console.log('Name is :'+this.name+'Age is :'+this.age+'MOral is :'+this.moral);
}

person.print();