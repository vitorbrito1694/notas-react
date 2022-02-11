import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="grid grid-flow-row auto-cols-min grid-rows-5 gap-4">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li className="inline" key={index}>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
