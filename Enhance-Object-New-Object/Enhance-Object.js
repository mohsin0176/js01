let name='MOHSIN';
let email='msnju2010@gmail.com';

const Cat={
	name,
	email,
	print()
	{
		console.log(this.name,this.email);
	}
}

Cat.print();
console.log(Cat);