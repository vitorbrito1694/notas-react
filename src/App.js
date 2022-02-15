import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

class App extends Component {
  constructor() {
    super();
    this.notas = [];
  }
  criarNota(titulo, texto) {
    //funcao para criar nota
    const novaNota = { titulo, texto };
    this.notas.push(novaNota);
    console.log("uma nova nota foi criada" + titulo + " " + texto);
  }
  render() {
    return (
      <section className="flex flex-row">
        <div className="basis-1/5 p-6 border-solid border-r-2 border-slate-300">
          <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        </div>
        <div className="basis-4/5 p-6">
          <ListaDeNotas notas={this.notas} />
        </div>
      </section>
    );
  }
}

export default App;
