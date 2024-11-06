const contact = {
  contacts: [],
  add(name, phoneNumber) {
    this.contacts.push({ name, phoneNumber });
  },
  getOne(name) {
    const contact = this.contacts.find((contact) => contact.name === name);
    console.log(contact);
  },
  getAll() {
    console.log(this.contacts);
  },
  deleteAll() {
    this.contacts = [];
  },
  deleteOne(name) {
    const contacts = this.contacts.filter((contact) => contact.name !== name);

    this.contacts = contacts;
  },
};

contact.add("ali", 12345678);
contact.add("vali", 3124523);
contact.add("zufar", 5345709370);
// contact.deleteAll();

// contact.getAll();
contact.deleteOne("ali");
// contact.getAll();
