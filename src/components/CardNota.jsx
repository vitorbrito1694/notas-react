import React, { Component } from "react";

class CardNota extends Component {
  render() {
    return (
      <section className="bg-slate-200 p-4 rounded-lg">
        <header>
          <h3 className="font-bold text-slate-500 mb-2">Tarefa1</h3>
        </header>
        <p className="p-2">Escreva sua nota</p>
      </section>
    );
  }
}

export default CardNota;
