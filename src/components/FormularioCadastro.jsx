import React, { Component } from "react";
import CardNota from "./CardNota";

class FormularioCadastro extends Component {
  render() {
    return (
      <div className="flex">
        <div className="grid columns-1 justify-center content-start bg-slate-0 h-screen border-solid border-r-2 border-slate-300">
          <input
            className="bg-slate-200 p-2 mt-6 mx-6 w-60 rounded-lg"
            type="text"
            name="form__titulo"
            id="form__titulo"
            placeholder="Título"
          />
          <textarea
            className="bg-slate-200 p-2 mt-3 mx-6 w-auto rounded-lg"
            name="form__texto"
            id="form__texto"
            rows={15}
            placeholder="Escreva sua Nota"
          ></textarea>
          <button className=" bg-slate-500 px-3 py-2 mx-6 mt-3 rounded-lg text-white">
            Criar Nota
          </button>
        </div>
        <div className="m-6">
          <CardNota />
          <CardNota />
          <CardNota />
        </div>
      </div>
    );
  }
}

export default FormularioCadastro;
