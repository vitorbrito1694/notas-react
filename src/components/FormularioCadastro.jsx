import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <div className="flex p-6">
        <div className="flex-initial max-w-md w-1/5 h-screen justify-between ">
          <form>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Adicionar uma nota:
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="title"
                id="title"
                className="focus:ring-indigo-300 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="Um novo título"
              />
            </div>
            <textarea className="w-full" placeholder="Escreva sua nota..." />
            <button>Criar Nota</button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormularioCadastro;
