import ContactUserCard from "./ContactUserCard.jsx"

const contactsHeader = <h1>Contacts</h1>

function contacts() {
	return (<>
		<aside>
			<ContactUserCard />
			<ContactUserCard />
			<ContactUserCard />
		</aside>
	</>)
}