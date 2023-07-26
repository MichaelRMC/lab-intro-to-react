const contacts = [
{id: 1
 fullName: faker.person.fullName,
 jobTitle: faker.person.jobTitle
}
{id: 2
 fullName: faker.person.fullName,
 jobTitle: faker.person.jobTitle
}
{id: 3
 fullName: faker.person.fullName,
 jobTitle: faker.person.jobTitle
}
{id: 4
 fullName: faker.person.fullName,
 jobTitle: faker.person.jobTitle
}
]
	 
function ContactUserCard() {
	return (
		<>
		{
			contacts.map(contact => {
				return (<article>
			<h2>{contact.fullName}</h2>
			<span>{contact.jobTitle}</span>
			<span>Ullamco deserunt ullamco minim mollit irure.</span>
		 </article>)
			})
		}
		</>
	)
}