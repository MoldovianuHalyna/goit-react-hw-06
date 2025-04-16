import { ToastContainer, toast } from "react-toastify";
import { Slide } from "react-toastify";
import { MdDeleteOutline } from "react-icons/md";

import { useEffect, useState } from "react";
import s from "./main.module.css";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
const INITIAL_STATE = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) || []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeInput = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (contact) => {
    const newContacts = [contact, ...contacts];
    setContacts(newContacts);
  };
  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
    toast.success("Contact deleted successfully", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: s.customToastDelete,
      theme: "light",
      transition: Slide,
      icon: <MdDeleteOutline />,
    });
  };
  return (
    <Container>
      <h1 className={s.header}>Phone Book</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleChangeInput={handleChangeInput} />

      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />

      <ToastContainer />
    </Container>
  );
}

export default App;
