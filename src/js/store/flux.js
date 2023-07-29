const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			contacts: [
				{
					id: 1,
					name: "Tessa St Anger",
					homeAddress: "666 Snowhite St.",
					phone: "(49) 326-9674",
					email: "Tessa@bemal.de"
				},
				{
					id: 2,
					name: "Cindy Becker",
					homeAddress: "0109 NW 25th St.",
					phone: "(49) 785-3684",
					email: "MissCindy@bemal.de"
				},
				{
					id: 3,
					name: "Mannon Vezu",
					homeAddress: "3366 SW 1st St.",
					phone: "(49) 358-1235",
					email: "MannonVeZu@bemal.de"
				},
				{
					id: 4,
					name: "Jameson Funf",
					homeAddress: "66 SW 33th Ave.",
					phone: "(49) 321-5539",
					email: "Jameson5@bemal.de"
				},
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			//delete contact from the list
			deleteContact: (contact) => {
				//pulls the contacts in the store
				let listOfContacts = getStore().contacts;
				//filters the contact and generates new array
				setStore({ contacts: listOfContacts.filter((item) => item !== contact) });
			},

			//add contact to the list
			addContact: (contact) => {
				// pulls contacts from the store
				let listOfContacts = getStore().contacts;
				// creates an id for the new contact and add rest of its info
				const newContact = {
					id: listOfContacts.length + 1,
					...contact
				};
				// adds new contact to the list
				setStore({ contacts: [...listOfContacts, newContact] });
			},

			//edit contact from the list
			editContact: (id, updatedContact) => {
				// pulls contacts from the store
				let listOfContacts = getStore().contacts;
				// if contact with id exists then update it
				const contactIndex = listOfContacts.findIndex(contact => contact.id === id);
				if (contactIndex !== -1) {
					const updatedContacts = [...listOfContacts];
					updatedContacts[contactIndex] = { id, ...updatedContact };
					// updates the contacts' info in the store
					setStore({ contacts: updatedContacts });
				}
			},
		}
	};
};

export default getState;