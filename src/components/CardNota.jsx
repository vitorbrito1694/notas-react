import React, { Component } from "react";
import deleteSVG from "../assets/delete.svg";

class CardNota extends Component {
  render() {
    return (
      <section className="w-60 bg-slate-200 p-4 rounded-lg">
        <header>
          <div className="flex justify-between">
            <h4 className="text-slate-500">Categoria</h4>
            <img src={deleteSVG} alt="botao para deletar anotacao" />
          </div>
          <h3 className="font-bold text-slate-500 mb-2">{this.props.titulo}</h3>
        </header>
        <p className="p-2">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
