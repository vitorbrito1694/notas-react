import React, { Component } from "react";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
  }

  handleMudancaTitulo(evento) {
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form className="">
        <div className="h-screen bg-slate-0 border-solid border-r-2 border-slate-300">
          <input
            className="flex-initial w-64 bg-slate-200 p-2 mt-6 mx-6 rounded-lg"
            type="text"
            name="form__titulo"
            id="form__titulo"
            placeholder="Título"
            onChange={this.handleMudancaTitulo.bind(this)}
          />
          <textarea
            className="flex-initial w-64 bg-slate-200 p-2 mt-3 mx-6 rounded-lg"
            name="form__texto"
            id="form__texto"
            rows={15}
            placeholder="Escreva sua Nota"
          ></textarea>
          <button className=" bg-slate-500 px-3 py-2 mx-6 mt-3 rounded-lg text-white">
            Criar Nota
          </button>
        </div>
      </form>
    );
  }
}

export default FormularioCadastro;
