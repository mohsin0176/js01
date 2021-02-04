class person 
{
	constructor(name,email)
	{
		this.name=name;
		this.email=email;
	}

	get name()
	{
		return this.name;
	}

	get name(name)
	{
		return this.name;
	}

	print()
	{
        console.log(`Name:${this.name};Email:${this.email}`);
	}
}

export default person;