import { AddContact, ListContact } from "./components";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Aplikasi Kontak App</h1>
      <hr />
      <AddContact />
      <ListContact />
    </div>
  );
}

export default App;
