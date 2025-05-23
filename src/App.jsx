import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import { MdDeleteOutline } from "react-icons/md";

import s from "./main.module.css";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  return (
    <Container>
      <h1 className={s.header}>Phone Book</h1>
      <ContactForm />
      <SearchBox />

      <ContactList />

      <ToastContainer />
    </Container>
  );
}

export default App;
