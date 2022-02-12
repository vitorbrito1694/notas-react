import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

function App() {
  return (
    <section className="flex flex-row">
      <div className="basis-1/5">
        <FormularioCadastro />
      </div>
      <div className="basis-4/5 p-6">
        <ListaDeNotas />
      </div>
    </section>
  );
}

export default App;
